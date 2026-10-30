const test = require('node:test');
const assert = require('node:assert/strict');
const {
    hashPassword,
    validateLoginInput,
    validateRegistrationInput,
    verifyGoogleCredential,
    verifyPassword
} = require('./auth-validation');

test('normalizes and validates public registration details', () => {
    const result = validateRegistrationInput({
        name: '  Sam Skinner  ',
        email: '  SAM@example.com ',
        password: 'strong-pass-1'
    });

    assert.deepEqual(result.user, {
        name: 'Sam Skinner',
        email: 'sam@example.com',
        password: 'strong-pass-1'
    });
});

test('rejects invalid registration details and short passwords', () => {
    assert.match(validateRegistrationInput(null).error, /name, email, and password/);
    assert.match(validateRegistrationInput({
        name: 'S',
        email: 'not-an-email',
        password: 'short'
    }).error, /Name must/);
    assert.match(validateRegistrationInput({
        name: 'Sam',
        email: 'sam@example.com',
        password: 'short'
    }).error, /Password must/);
});

test('normalizes login email and rejects malformed credentials', () => {
    assert.deepEqual(validateLoginInput({
        email: ' SAM@example.com ',
        password: 'password'
    }).user, {
        email: 'sam@example.com',
        password: 'password'
    });
    assert.match(validateLoginInput({ email: 'bad', password: '' }).error, /valid email and password/);
});

test('hashes passwords with a unique salt and verifies only the matching password', async () => {
    const firstHash = await hashPassword('strong-pass-1');
    const secondHash = await hashPassword('strong-pass-1');

    assert.notEqual(firstHash, secondHash);
    assert.equal(await verifyPassword('strong-pass-1', firstHash), true);
    assert.equal(await verifyPassword('wrong-password', firstHash), false);
    assert.equal(await verifyPassword('strong-pass-1', 'invalid'), false);
});

test('accepts only unexpired, verified Google credentials issued to this app', async () => {
    const validClaims = {
        aud: 'client-id',
        iss: 'https://accounts.google.com',
        sub: 'google-user-id',
        email: 'GOOGLE@example.com',
        email_verified: 'true',
        name: 'Google User',
        exp: String(Math.floor(Date.now() / 1000) + 60)
    };
    const fetchStub = async (url) => {
        assert.equal(new URL(url).origin, 'https://oauth2.googleapis.com');
        return { ok: true, json: async () => validClaims };
    };

    assert.deepEqual(await verifyGoogleCredential('valid-token', 'client-id', fetchStub), {
        subject: 'google-user-id',
        email: 'google@example.com',
        name: 'Google User'
    });
    assert.equal(await verifyGoogleCredential('valid-token', 'other-client', fetchStub), null);
    assert.equal(await verifyGoogleCredential('', 'client-id', fetchStub), null);
    assert.equal(await verifyGoogleCredential('valid-token', '', fetchStub), null);
});

test('rejects expired or unverified Google credentials', async () => {
    const claims = {
        aud: 'client-id',
        iss: 'accounts.google.com',
        sub: 'google-user-id',
        email: 'google@example.com',
        email_verified: 'false',
        exp: String(Math.floor(Date.now() / 1000) - 60)
    };

    assert.equal(await verifyGoogleCredential('token', 'client-id', async () => ({
        ok: true,
        json: async () => claims
    })), null);
});
