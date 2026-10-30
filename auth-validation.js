const crypto = require('node:crypto');
const { promisify } = require('node:util');

const scrypt = promisify(crypto.scrypt);

function validateEmail(email) {
    return typeof email === 'string'
        && email.length <= 254
        && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateRegistrationInput(input) {
    if (!input || typeof input !== 'object' || Array.isArray(input)) {
        return { error: 'Please provide your name, email, and password.' };
    }

    const name = typeof input.name === 'string' ? input.name.trim() : '';
    const email = typeof input.email === 'string' ? input.email.trim().toLowerCase() : '';
    const password = typeof input.password === 'string' ? input.password : '';

    if (name.length < 2 || name.length > 80) {
        return { error: 'Name must be between 2 and 80 characters.' };
    }
    if (!validateEmail(email)) {
        return { error: 'Please enter a valid email address.' };
    }
    if (password.length < 8 || password.length > 128) {
        return { error: 'Password must be between 8 and 128 characters.' };
    }

    return { user: { name, email, password } };
}

function validateLoginInput(input) {
    if (!input || typeof input !== 'object' || Array.isArray(input)) {
        return { error: 'Please enter your email and password.' };
    }

    const email = typeof input.email === 'string' ? input.email.trim().toLowerCase() : '';
    const password = typeof input.password === 'string' ? input.password : '';

    if (!validateEmail(email) || password.length < 1 || password.length > 128) {
        return { error: 'Please enter a valid email and password.' };
    }

    return { user: { email, password } };
}

async function hashPassword(password) {
    const salt = crypto.randomBytes(16);
    const derivedKey = await scrypt(password, salt, 64);
    return `${salt.toString('hex')}:${derivedKey.toString('hex')}`;
}

async function verifyPassword(password, storedHash) {
    if (typeof storedHash !== 'string') {
        return false;
    }

    const [saltHex, keyHex, ...extraParts] = storedHash.split(':');
    if (extraParts.length > 0 || !/^[a-f0-9]{32}$/i.test(saltHex || '') || !/^[a-f0-9]{128}$/i.test(keyHex || '')) {
        return false;
    }

    const expectedKey = Buffer.from(keyHex, 'hex');
    const actualKey = await scrypt(password, Buffer.from(saltHex, 'hex'), expectedKey.length);
    return crypto.timingSafeEqual(expectedKey, actualKey);
}

async function verifyGoogleCredential(credential, clientId, fetchImplementation = fetch) {
    if (typeof credential !== 'string' || credential.length === 0 || credential.length > 10000 || !clientId) {
        return null;
    }

    const tokenInfoUrl = new URL('https://oauth2.googleapis.com/tokeninfo');
    tokenInfoUrl.searchParams.set('id_token', credential);
    const response = await fetchImplementation(tokenInfoUrl);
    if (!response.ok) {
        return null;
    }

    const claims = await response.json();
    const expiresAt = Number(claims.exp);
    if (
        !claims
        || claims.aud !== clientId
        || !['accounts.google.com', 'https://accounts.google.com'].includes(claims.iss)
        || !claims.sub
        || !claims.email
        || (claims.email_verified !== true && claims.email_verified !== 'true')
        || !Number.isFinite(expiresAt)
        || expiresAt <= Math.floor(Date.now() / 1000)
    ) {
        return null;
    }

    return {
        subject: claims.sub,
        email: String(claims.email).toLowerCase(),
        name: typeof claims.name === 'string' && claims.name.trim()
            ? claims.name.trim().slice(0, 80)
            : String(claims.email).split('@')[0].slice(0, 80)
    };
}

module.exports = {
    hashPassword,
    validateLoginInput,
    validateRegistrationInput,
    verifyGoogleCredential,
    verifyPassword
};
