const FEEDBACK_MODULES = new Set([
    'overall',
    'dashboard',
    'education',
    'diet',
    'doctor-consultation',
    'skin-essentials'
]);

const validateFeedbackInput = (input) => {
    if (!input || typeof input !== 'object' || Array.isArray(input)) {
        return { error: 'Submit valid feedback details.' };
    }

    const rating = input.rating;
    const module = input.module;
    const message = typeof input.message === 'string' ? input.message.trim() : '';

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
        return { error: 'Choose a rating from 1 to 5 stars.' };
    }
    if (typeof module !== 'string' || !FEEDBACK_MODULES.has(module)) {
        return { error: 'Choose a valid platform area.' };
    }
    if (message.length < 10 || message.length > 2000) {
        return { error: 'Feedback must be between 10 and 2000 characters.' };
    }

    return { feedback: { rating, module, message } };
};

module.exports = { validateFeedbackInput };
