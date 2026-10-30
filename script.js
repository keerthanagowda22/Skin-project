document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameInput = document.getElementById('fullName');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const loginButton = document.querySelector('.login-btn');
    const languageSelect = document.getElementById('language');
    const heading = document.querySelector('.login-card h2');
    const nameGroup = document.getElementById('nameGroup');
    const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
    const rememberMeGroup = document.getElementById('rememberMe').parentElement;
    const signupPrompt = document.getElementById('signupPrompt');
    const signupToggle = document.getElementById('signupToggle');
    let isSignupMode = false;

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const getApiUrl = (path) => {
        const pageUrl = new URL(window.location.href);
        const isLocalPreview = pageUrl.protocol === 'http:'
            && ['localhost', '127.0.0.1'].includes(pageUrl.hostname)
            && pageUrl.port !== '3000';
        const apiOrigin = isLocalPreview
            ? `http://${pageUrl.hostname}:3000`
            : pageUrl.origin;
        return new URL(path, apiOrigin).toString();
    };

    const showAuthMessage = (message, isError = true) => {
        const status = document.getElementById('authMessage');
        status.textContent = message;
        status.classList.toggle('error', isError);
    };

    const showError = (inputId, message) => {
        const errorElement = document.getElementById(`${inputId}Error`);
        if (errorElement) {
            errorElement.textContent = message;
        }
    };

    const clearErrors = () => {
        ['name', 'email', 'password', 'confirmPassword'].forEach((inputId) => showError(inputId, ''));
        const status = document.getElementById('authMessage');
        if (status) {
            status.textContent = '';
            status.classList.remove('error');
        }
    };

    const setMode = (signupMode) => {
        isSignupMode = signupMode;
        nameGroup.hidden = !signupMode;
        confirmPasswordGroup.hidden = !signupMode;
        rememberMeGroup.hidden = signupMode;
        nameInput.required = signupMode;
        confirmPasswordInput.required = signupMode;
        passwordInput.autocomplete = signupMode ? 'new-password' : 'current-password';
        heading.textContent = signupMode ? 'Create your account' : 'Login';
        loginButton.textContent = signupMode ? 'Create Account' : 'Login';
        signupPrompt.textContent = signupMode ? 'Already have an account?' : "Don't have an account?";
        signupToggle.textContent = signupMode ? 'Log in' : 'Register';
        clearErrors();
        if (signupMode) {
            nameInput.focus();
        } else {
            emailInput.focus();
        }
    };

    signupToggle.addEventListener('click', (event) => {
        event.preventDefault();
        setMode(!isSignupMode);
    });

    emailInput.addEventListener('blur', () => {
        if (emailInput.value.trim() && !validateEmail(emailInput.value.trim())) {
            showError('email', 'Please enter a valid email address.');
        } else {
            showError('email', '');
        }
    });
    emailInput.addEventListener('input', () => showError('email', ''));
    passwordInput.addEventListener('input', () => showError('password', ''));
    nameInput.addEventListener('input', () => showError('name', ''));
    confirmPasswordInput.addEventListener('input', () => showError('confirmPassword', ''));

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        clearErrors();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        let isValid = true;

        if (!validateEmail(email)) {
            showError('email', 'Please enter a valid email address.');
            isValid = false;
        }
        if (password.length < 8 || password.length > 128) {
            showError('password', 'Password must be between 8 and 128 characters.');
            isValid = false;
        }
        if (isSignupMode && (name.length < 2 || name.length > 80)) {
            showError('name', 'Name must be between 2 and 80 characters.');
            isValid = false;
        }
        if (isSignupMode && confirmPasswordInput.value !== password) {
            showError('confirmPassword', 'Passwords do not match.');
            isValid = false;
        }
        if (!isValid) {
            return;
        }

        const status = document.getElementById('authMessage');
        const originalButtonText = loginButton.textContent;
        loginButton.disabled = true;
        loginButton.classList.add('loading');

        try {
            const response = await fetch(getApiUrl(isSignupMode ? '/api/auth/register' : '/api/auth/login'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(isSignupMode ? { name, email, password } : { email, password })
            });
            const result = await response.json();

            if (!response.ok) {
                showAuthMessage(result.error || 'Account request failed. Please try again.');
                return;
            }

            localStorage.setItem('userName', result.user.name);
            localStorage.setItem('userEmail', result.user.email);
            if (!isSignupMode && document.getElementById('rememberMe').checked) {
                localStorage.setItem('rememberMe', 'true');
                localStorage.setItem('savedEmail', email);
            } else {
                localStorage.removeItem('rememberMe');
                localStorage.removeItem('savedEmail');
            }
            window.location.href = 'dashboard.html';
        } catch (error) {
            console.error('Account request failed:', error);
            showAuthMessage('Account server is not running. In the project folder, run "npm start", then retry.');
        } finally {
            loginButton.disabled = false;
            loginButton.classList.remove('loading');
            loginButton.textContent = originalButtonText;
        }
    });

    languageSelect.addEventListener('change', (event) => {
        translatePage(event.target.value);
        if (!isSignupMode) {
            heading.textContent = translations[event.target.value]['login-heading'] || translations.en['login-heading'];
            loginButton.textContent = translations[event.target.value]['login-button'] || translations.en['login-button'];
        }
    });

    const rememberMeCheckbox = document.getElementById('rememberMe');
    const savedEmail = localStorage.getItem('savedEmail');
    if (localStorage.getItem('rememberMe') === 'true' && savedEmail) {
        emailInput.value = savedEmail;
        rememberMeCheckbox.checked = true;
    }

    const passwordContainer = passwordInput.parentElement;
    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.className = 'password-toggle';
    toggleButton.setAttribute('aria-label', 'Show password');
    toggleButton.textContent = 'Show';
    toggleButton.style.cssText = 'position:absolute;right:15px;top:39px;background:none;border:none;cursor:pointer;font-size:12px;';
    passwordContainer.style.position = 'relative';
    passwordContainer.appendChild(toggleButton);
    toggleButton.addEventListener('click', () => {
        const isPasswordHidden = passwordInput.type === 'password';
        passwordInput.type = isPasswordHidden ? 'text' : 'password';
        toggleButton.textContent = isPasswordHidden ? 'Hide' : 'Show';
        toggleButton.setAttribute('aria-label', isPasswordHidden ? 'Hide password' : 'Show password');
    });
});
