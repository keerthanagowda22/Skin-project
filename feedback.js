document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const messageInput = document.getElementById('feedbackMessage');
    const characterCount = document.getElementById('characterCount');
    const feedbackStatus = document.getElementById('feedbackStatus');
    const submitButton = document.getElementById('submitFeedback');
    const ratingHint = document.getElementById('ratingHint');
    const apiBaseUrl =
        ['localhost', '127.0.0.1'].includes(window.location.hostname) &&
        window.location.port === '5500'
            ? `${window.location.protocol}//${window.location.hostname}:3000`
            : '';
    const ratingDescriptions = [
        'Needs improvement',
        'Below expectations',
        'Good',
        'Very good',
        'Excellent'
    ];

    const updateMessageState = () => {
        characterCount.textContent = `${messageInput.value.length} / 2000`;
        messageInput.setCustomValidity(
            messageInput.value.trim().length < 10
                ? 'Please enter at least 10 non-space characters.'
                : ''
        );
    };

    messageInput.addEventListener('input', updateMessageState);
    updateMessageState();

    feedbackForm.querySelectorAll('input[name="rating"]').forEach((input) => {
        input.addEventListener('change', () => {
            const rating = Number(input.value);
            ratingHint.textContent = `${input.value} ${input.value === '1' ? 'star' : 'stars'} — ${ratingDescriptions[rating - 1]}.`;
            feedbackForm.querySelectorAll('.rating-options label').forEach((label) => {
                const labelRating = Number(label.querySelector('input').value);
                label.classList.toggle('is-selected', labelRating <= rating);
            });
        });
    });

    feedbackForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!feedbackForm.reportValidity()) return;

        const formData = new FormData(feedbackForm);
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting feedback…';
        feedbackStatus.classList.remove('is-error');
        feedbackStatus.textContent = '';

        try {
            const response = await fetch(`${apiBaseUrl}/api/feedback`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    rating: Number(formData.get('rating')),
                    module: formData.get('module'),
                    message: String(formData.get('message') || '').trim()
                })
            });
            const contentType = response.headers.get('content-type') || '';
            if (!contentType.includes('application/json')) {
                throw new Error('The feedback service returned an unexpected response. Please try again.');
            }
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || 'Feedback could not be submitted.');
            }

            feedbackForm.reset();
            feedbackForm.querySelectorAll('.rating-options label').forEach((label) => {
                label.classList.remove('is-selected');
            });
            updateMessageState();
            ratingHint.textContent = 'Choose from 1 star (Needs improvement) to 5 stars (Excellent).';
            feedbackStatus.textContent = 'Thanks — your feedback has been saved.';
        } catch (error) {
            feedbackStatus.classList.add('is-error');
            feedbackStatus.textContent = error instanceof TypeError && /fetch/i.test(error.message)
                ? 'Could not connect to the feedback server. Start it with "npm start" in the project folder, then try again.'
                : error instanceof Error
                    ? error.message
                    : 'Feedback could not be submitted. Please try again.';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Submit feedback';
        }
    });
});
