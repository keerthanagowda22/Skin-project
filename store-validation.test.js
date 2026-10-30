const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { calculateAmountPaise, validateCheckoutInput, verifyPaymentSignature } = require('./store-validation');

const products = [
    { id: 'face-wash', pricePaise: 9500 },
    { id: 'cream', pricePaise: 17900 }
];

const validCheckout = {
    items: [{ id: 'face-wash', quantity: 2 }, { id: 'cream', quantity: 1 }],
    customer: {
        fullName: 'Test Customer',
        phone: '+91 98765 43210',
        email: 'test@example.com',
        address: '10 Sample Road',
        city: 'Bengaluru',
        state: 'Karnataka',
        postalCode: '560001'
    },
    privacyConsent: true
};

test('uses catalogue prices on the server to calculate payment amount', () => {
    const validated = validateCheckoutInput(validCheckout, products);
    assert.equal(validated.error, undefined);
    assert.equal(calculateAmountPaise(validated.items, 0), 36900);
});

test('rejects unknown product IDs and excessive quantities', () => {
    assert.match(validateCheckoutInput({ ...validCheckout, items: [{ id: 'unknown', quantity: 1 }] }, products).error, /no longer available/);
    assert.match(validateCheckoutInput({ ...validCheckout, items: [{ id: 'cream', quantity: 6 }] }, products).error, /quantity/);
});

test('rejects checkout for products without a verified price', () => {
    const catalogueWithUnpricedItem = [...products, { id: 'search-result', pricePaise: null }];
    const result = validateCheckoutInput({
        ...validCheckout,
        items: [{ id: 'search-result', quantity: 1 }]
    }, catalogueWithUnpricedItem);
    assert.match(result.error, /price is not verified/);
});

test('requires valid Indian delivery and customer details', () => {
    assert.match(validateCheckoutInput({
        ...validCheckout,
        customer: { ...validCheckout.customer, postalCode: '123' }
    }, products).error, /PIN code/);
    assert.match(validateCheckoutInput({
        ...validCheckout,
        customer: { ...validCheckout.customer, phone: '123456' }
    }, products).error, /mobile number/);
});

test('verifies Razorpay HMAC signatures and rejects tampering', () => {
    const orderId = 'order_test';
    const paymentId = 'pay_test';
    const secret = 'test_secret';
    const signature = crypto.createHmac('sha256', secret).update(`${orderId}|${paymentId}`).digest('hex');
    assert.equal(verifyPaymentSignature(orderId, paymentId, signature, secret), true);
    assert.equal(verifyPaymentSignature(orderId, paymentId, `${signature.slice(0, -1)}0`, secret), false);
    assert.equal(verifyPaymentSignature(orderId, paymentId, signature, ''), false);
});
