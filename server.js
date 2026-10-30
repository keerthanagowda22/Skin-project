require('dotenv').config();

const crypto = require('node:crypto');
const os = require('node:os');
const path = require('node:path');
const fs = require('node:fs');
const { DatabaseSync } = require('node:sqlite');
const express = require('express');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');
const Razorpay = require('razorpay');
const products = require('./skin-essentials-products.json');
const { calculateAmountPaise, validateCheckoutInput, verifyPaymentSignature } = require('./store-validation');
const { validateFeedbackInput } = require('./feedback-validation');
const {
    hashPassword,
    validateLoginInput,
    validateRegistrationInput,
    verifyGoogleCredential,
    verifyPassword
} = require('./auth-validation');

const app = express();
const port = Number(process.env.PORT || 3000);
const keyId = process.env.RAZORPAY_KEY_ID || '';
const keySecret = process.env.RAZORPAY_KEY_SECRET || '';
const googleClientId = process.env.GOOGLE_CLIENT_ID || '';
const shippingFeePaise = Number(process.env.SHIPPING_FEE_PAISE || 0);
const testCheckoutEnabled = keyId.startsWith('rzp_test_') && keySecret.length > 0 && Number.isSafeInteger(shippingFeePaise) && shippingFeePaise >= 0;
const razorpay = testCheckoutEnabled ? new Razorpay({ key_id: keyId, key_secret: keySecret }) : null;
const privateDataPath = process.env.STORE_DB_PATH || path.join(os.homedir(), '.skin-essentials-store', 'orders.sqlite');

fs.mkdirSync(path.dirname(privateDataPath), { recursive: true });
const database = new DatabaseSync(privateDataPath);
database.exec(`
    create table if not exists store_orders (
        id text primary key,
        razorpay_order_id text unique not null,
        razorpay_payment_id text,
        amount_paise integer not null,
        currency text not null,
        customer_json text not null,
        items_json text not null,
        status text not null check (status in ('created', 'paid', 'payment_failed')),
        created_at text not null default current_timestamp,
        paid_at text
    );
    create table if not exists platform_feedback (
        id text primary key,
        rating integer not null check (rating between 1 and 5),
        module text not null,
        message text not null,
        submitted_at text not null default current_timestamp
    );
    create table if not exists user_accounts (
        id text primary key,
        name text not null,
        email text not null collate nocase unique,
        password_hash text not null,
        google_subject text unique,
        created_at text not null default current_timestamp
    );
`);
const accountColumns = database.prepare('pragma table_info(user_accounts)').all();
if (!accountColumns.some((column) => column.name === 'google_subject')) {
    database.exec('alter table user_accounts add column google_subject text');
}
database.exec('create unique index if not exists user_accounts_google_subject_unique on user_accounts(google_subject)');

app.disable('x-powered-by');
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", 'https://checkout.razorpay.com', 'https://accounts.google.com'],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", 'data:', 'https://cdn.shopify.com', 'https://encrypted-tbn0.gstatic.com', 'https://encrypted-tbn1.gstatic.com', 'https://encrypted-tbn2.gstatic.com'],
            connectSrc: ["'self'", 'https://api.razorpay.com', 'https://accounts.google.com', 'https://oauth2.googleapis.com'],
            frameSrc: ['https://api.razorpay.com', 'https://checkout.razorpay.com', 'https://accounts.google.com/gsi/'],
            formAction: ["'self'", 'https://api.razorpay.com', 'https://checkout.razorpay.com'],
            upgradeInsecureRequests: null
        }
    },
    crossOriginEmbedderPolicy: false
}));
app.use(express.json({ limit: '12kb' }));

const liveServerOrigins = new Set([
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'http://localhost:5501',
    'http://127.0.0.1:5501'
]);

app.use('/api', (request, response, next) => {
    const origin = request.get('Origin');
    if (liveServerOrigins.has(origin)) {
        response.setHeader('Access-Control-Allow-Origin', origin);
        response.vary('Origin');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        if (request.method === 'OPTIONS') {
            response.sendStatus(204);
            return;
        }
    }
    next();
});

const checkoutLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 12,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: { error: 'Too many checkout attempts. Please wait and try again.' }
});

const feedbackLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: { error: 'Too many feedback submissions. Please wait and try again.' }
});

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: { error: 'Too many account attempts. Please wait and try again.' }
});

app.get('/api/catalog', (request, response) => {
    response.json(products.map((product) => ({
        ...product,
        price: Number.isSafeInteger(product.pricePaise) ? product.pricePaise / 100 : null
    })));
});

app.get('/api/auth/google/config', (request, response) => {
    response.json({ enabled: Boolean(googleClientId), clientId: googleClientId || null });
});

app.post('/api/auth/google', authLimiter, async (request, response) => {
    if (!googleClientId) {
        response.status(503).json({ error: 'Google sign-in is not configured. Set GOOGLE_CLIENT_ID on the server.' });
        return;
    }

    try {
        const googleUser = await verifyGoogleCredential(request.body?.credential, googleClientId);
        if (!googleUser) {
            response.status(401).json({ error: 'Google could not verify this account. Please try again.' });
            return;
        }

        const existingBySubject = database.prepare(`
            select name, email from user_accounts where google_subject = ?
        `).get(googleUser.subject);
        if (existingBySubject) {
            response.json({ user: { name: existingBySubject.name, email: existingBySubject.email } });
            return;
        }

        const existingByEmail = database.prepare(`
            select id from user_accounts where email = ?
        `).get(googleUser.email);
        if (existingByEmail) {
            response.status(409).json({
                error: 'An account already uses this email. Log in with your password first, then use Google sign-in.'
            });
            return;
        }

        const generatedPasswordHash = await hashPassword(crypto.randomBytes(32).toString('hex'));
        database.prepare(`
            insert into user_accounts (id, name, email, password_hash, google_subject)
            values (?, ?, ?, ?, ?)
        `).run(
            crypto.randomUUID(),
            googleUser.name,
            googleUser.email,
            generatedPasswordHash,
            googleUser.subject
        );
        response.json({ user: { name: googleUser.name, email: googleUser.email } });
    } catch (error) {
        console.error('Failed to sign in with Google:', error.message);
        response.status(502).json({ error: 'Google sign-in could not be completed. Please try again later.' });
    }
});

app.post('/api/auth/register', authLimiter, async (request, response) => {
    const validated = validateRegistrationInput(request.body);
    if (validated.error) {
        response.status(400).json({ error: validated.error });
        return;
    }

    try {
        const passwordHash = await hashPassword(validated.user.password);
        const userId = crypto.randomUUID();
        database.prepare(`
            insert into user_accounts (id, name, email, password_hash)
            values (?, ?, ?, ?)
        `).run(userId, validated.user.name, validated.user.email, passwordHash);
        response.status(201).json({
            user: { name: validated.user.name, email: validated.user.email }
        });
    } catch (error) {
        if (error.code === 'ERR_SQLITE_ERROR' && error.message.includes('UNIQUE constraint failed: user_accounts.email')) {
            response.status(409).json({ error: 'An account with this email already exists. Please log in instead.' });
            return;
        }
        console.error('Failed to create user account:', error.message);
        response.status(500).json({ error: 'Your account could not be created. Please try again later.' });
    }
});

app.post('/api/auth/login', authLimiter, async (request, response) => {
    const validated = validateLoginInput(request.body);
    if (validated.error) {
        response.status(400).json({ error: validated.error });
        return;
    }

    try {
        const account = database.prepare(`
            select name, email, password_hash
            from user_accounts
            where email = ?
        `).get(validated.user.email);
        if (!account || !(await verifyPassword(validated.user.password, account.password_hash))) {
            response.status(401).json({ error: 'Email or password is incorrect. If you are new here, please register.' });
            return;
        }

        response.json({ user: { name: account.name, email: account.email } });
    } catch (error) {
        console.error('Failed to authenticate user:', error.message);
        response.status(500).json({ error: 'Login could not be completed. Please try again later.' });
    }
});

app.post('/api/feedback', feedbackLimiter, (request, response) => {
    const validated = validateFeedbackInput(request.body);
    if (validated.error) {
        response.status(400).json({ error: validated.error });
        return;
    }

    const feedbackId = crypto.randomUUID();
    try {
        database.prepare(`
            insert into platform_feedback (id, rating, module, message)
            values (?, ?, ?, ?)
        `).run(
            feedbackId,
            validated.feedback.rating,
            validated.feedback.module,
            validated.feedback.message
        );
        response.status(201).json({ submitted: true, feedbackId });
    } catch (error) {
        console.error('Failed to save platform feedback:', error.message);
        response.status(500).json({ error: 'Feedback could not be saved. Please try again later.' });
    }
});

app.get('/api/checkout/config', (request, response) => {
    response.json({
        enabled: testCheckoutEnabled,
        testMode: true,
        keyId: testCheckoutEnabled ? keyId : null,
        shippingFeePaise: Number.isSafeInteger(shippingFeePaise) && shippingFeePaise >= 0 ? shippingFeePaise : 0
    });
});

app.post('/api/checkout/orders', checkoutLimiter, async (request, response) => {
    if (!testCheckoutEnabled || !razorpay) {
        response.status(503).json({ error: 'Razorpay test checkout is not configured. Add test keys to the private .env file.' });
        return;
    }

    const validated = validateCheckoutInput(request.body, products);
    if (validated.error) {
        response.status(400).json({ error: validated.error });
        return;
    }

    const amountPaise = calculateAmountPaise(validated.items, shippingFeePaise);
    if (!Number.isSafeInteger(amountPaise) || amountPaise < 100 || amountPaise > 50000000) {
        response.status(400).json({ error: 'The order amount is outside the supported test checkout range.' });
        return;
    }

    const appOrderId = crypto.randomUUID();
    const receipt = `skin-${appOrderId.replace(/-/g, '').slice(0, 24)}`;
    try {
        const razorpayOrder = await razorpay.orders.create({
            amount: amountPaise,
            currency: 'INR',
            receipt,
            notes: { app_order_id: appOrderId, environment: 'test' }
        });
        const orderItems = validated.items.map(({ product, quantity }) => ({
            id: product.id,
            name: product.name,
            quantity,
            unitPricePaise: product.pricePaise
        }));

        database.prepare(`
            insert into store_orders
                (id, razorpay_order_id, amount_paise, currency, customer_json, items_json, status)
            values (?, ?, ?, 'INR', ?, ?, 'created')
        `).run(
            appOrderId,
            razorpayOrder.id,
            amountPaise,
            JSON.stringify(validated.customer),
            JSON.stringify(orderItems)
        );

        response.status(201).json({
            appOrderId,
            orderId: razorpayOrder.id,
            amount: razorpayOrder.amount,
            currency: razorpayOrder.currency,
            keyId,
            testMode: true,
            shippingFeePaise
        });
    } catch (error) {
        console.error('Failed to create Razorpay test order:', error.message);
        response.status(502).json({ error: 'Could not start payment with Razorpay. No payment was taken; please retry.' });
    }
});

app.post('/api/checkout/verify', checkoutLimiter, async (request, response) => {
    if (!testCheckoutEnabled || !razorpay) {
        response.status(503).json({ error: 'Razorpay test checkout is not configured.' });
        return;
    }

    const { razorpay_order_id: razorpayOrderId, razorpay_payment_id: razorpayPaymentId, razorpay_signature: signature } = request.body || {};
    if (![razorpayOrderId, razorpayPaymentId, signature].every((value) => typeof value === 'string' && value.length > 0 && value.length <= 150)) {
        response.status(400).json({ error: 'Payment verification details are incomplete.' });
        return;
    }

    const order = database.prepare('select * from store_orders where razorpay_order_id = ?').get(razorpayOrderId);
    if (!order) {
        response.status(404).json({ error: 'The test order could not be found.' });
        return;
    }

    if (!verifyPaymentSignature(razorpayOrderId, razorpayPaymentId, signature, keySecret)) {
        response.status(400).json({ error: 'Payment verification failed. The order has not been confirmed.' });
        return;
    }

    try {
        const payment = await razorpay.payments.fetch(razorpayPaymentId);
        if (payment.order_id !== razorpayOrderId || payment.amount !== order.amount_paise || payment.currency !== order.currency || payment.status !== 'captured') {
            response.status(409).json({ error: 'Razorpay has not confirmed a captured payment for this order.' });
            return;
        }

        database.prepare(`
            update store_orders set status = 'paid', razorpay_payment_id = ?, paid_at = current_timestamp
            where id = ? and status = 'created'
        `).run(razorpayPaymentId, order.id);
        response.json({ verified: true, appOrderId: order.id, status: 'paid', testMode: true });
    } catch (error) {
        console.error('Failed to verify Razorpay payment:', error.message);
        response.status(502).json({ error: 'Could not verify payment with Razorpay. Do not retry payment; contact support with the order reference.' });
    }
});

app.use((request, response, next) => {
    if (/^\/(?:server\.js|store-validation(?:\.test)?\.js|feedback-validation(?:\.test)?\.js|package(?:-lock)?\.json|\.env(?:\.example)?|\.gitignore)$/i.test(request.path)) {
        response.sendStatus(404);
        return;
    }
    next();
});
app.use(express.static(__dirname, { dotfiles: 'deny', index: 'index.html' }));

app.use((error, request, response, next) => {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
        response.status(400).json({ error: 'Request body must be valid JSON.' });
        return;
    }
    console.error('Unhandled request error:', error.message);
    response.status(500).json({ error: 'An unexpected server error occurred.' });
});

app.listen(port, () => {
    console.log(`Skin Essentials test store available at http://localhost:${port}`);
    console.log(`Razorpay test checkout ${testCheckoutEnabled ? 'is enabled' : 'is disabled; configure test keys in .env'}.`);
    console.log(`Private order data is stored outside the public site at ${privateDataPath}`);
});
