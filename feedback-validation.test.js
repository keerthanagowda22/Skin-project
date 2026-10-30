const test = require('node:test');
const assert = require('node:assert/strict');
const { validateFeedbackInput } = require('./feedback-validation');

test('accepts anonymous feedback with a valid rating, module, and message', () => {
    assert.deepEqual(
        validateFeedbackInput({
            rating: 5,
            module: 'skin-essentials',
            message: 'The skincare catalogue was easy to use.'
        }),
        {
            feedback: {
                rating: 5,
                module: 'skin-essentials',
                message: 'The skincare catalogue was easy to use.'
            }
        }
    );
});

test('rejects invalid rating, module, and feedback length', () => {
    assert.match(validateFeedbackInput({
        rating: 0,
        module: 'overall',
        message: 'Helpful platform feedback.'
    }).error, /rating/);
    assert.match(validateFeedbackInput({
        rating: 4,
        module: 'unknown',
        message: 'Helpful platform feedback.'
    }).error, /platform area/);
    assert.match(validateFeedbackInput({
        rating: 4,
        module: 'overall',
        message: 'short'
    }).error, /between 10 and 2000/);
});

test('rejects non-object feedback submissions', () => {
    assert.match(validateFeedbackInput(null).error, /valid feedback/);
    assert.match(validateFeedbackInput([]).error, /valid feedback/);
});
