const crypto = require('node:crypto');

const MAX_CART_ITEMS = 20;
const MAX_QUANTITY = 5;

const validateCheckoutInput = (input, products) => {
    if (!input || typeof input !== 'object' || !Array.isArray(input.items) || input.items.length < 1 || input.items.length > MAX_CART_ITEMS) {
        return { error: 'Add between 1 and 20 products to your cart.' };
    }

    const items = [];
    for (const item of input.items) {
        if (!item || typeof item.id !== 'string' || !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > MAX_QUANTITY) {
            return { error: `Each product quantity must be between 1 and ${MAX_QUANTITY}.` };
        }
        const product = products.find((candidate) => candidate.id === item.id);
        if (!product) return { error: 'A product in your cart is no longer available.' };
        if (!Number.isSafeInteger(product.pricePaise) || product.pricePaise < 1) {
            return { error: 'A current price is not verified for one or more items. Remove them before checkout.' };
        }
        items.push({ product, quantity: item.quantity });
    }

    const customer = input.customer;
    if (!customer || typeof customer !== 'object') return { error: 'Enter your delivery details.' };
    const fullName = boundedString(customer.fullName, 1, 100);
    const phone = boundedString(customer.phone, 1, 20);
    const email = optionalString(customer.email, 254);
    const address = boundedString(customer.address, 5, 250);
    const city = boundedString(customer.city, 2, 100);
    const state = boundedString(customer.state, 2, 100);
    const postalCode = boundedString(customer.postalCode, 6, 6);

    if (!fullName || !phone || !address || !city || !state || email === false) {
        return { error: 'Complete all required delivery details with valid values.' };
    }
    const normalizedPhone = phone.replace(/[\s()-]/g, '');
    if (!/^(?:\+91)?[6-9]\d{9}$/.test(normalizedPhone)) {
        return { error: 'Enter a valid Indian mobile number, optionally starting with +91.' };
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { error: 'Enter a valid email address or leave it blank.' };
    }
    if (!postalCode || !/^[1-9]\d{5}$/.test(postalCode)) {
        return { error: 'Enter a valid six-digit Indian PIN code.' };
    }
    if (input.privacyConsent !== true) return { error: 'Please agree to use your delivery details for this test order.' };

    return {
        items,
        customer: { fullName, phone: normalizedPhone, email: email || null, address, city, state, postalCode }
    };
};

const boundedString = (value, minimum, maximum) => {
    if (typeof value !== 'string') return '';
    const trimmed = value.trim();
    return trimmed.length >= minimum && trimmed.length <= maximum ? trimmed : '';
};

const optionalString = (value, maximum) => {
    if (value === undefined || value === null || value === '') return '';
    if (typeof value !== 'string' || value.trim().length > maximum) return false;
    return value.trim();
};

const calculateAmountPaise = (items, shippingFeePaise) => {
    const subtotal = items.reduce((sum, item) => sum + item.product.pricePaise * item.quantity, 0);
    return subtotal + shippingFeePaise;
};

const verifyPaymentSignature = (orderId, paymentId, signature, secret) => {
    if (![orderId, paymentId, signature, secret].every((value) => typeof value === 'string' && value.length > 0)) return false;
    const expected = crypto.createHmac('sha256', secret).update(`${orderId}|${paymentId}`).digest();
    let provided;
    try {
        provided = Buffer.from(signature, 'hex');
    } catch (error) {
        return false;
    }
    return provided.length === expected.length && crypto.timingSafeEqual(expected, provided);
};

module.exports = { calculateAmountPaise, validateCheckoutInput, verifyPaymentSignature };
