document.addEventListener('DOMContentLoaded', function() {
    const loginCard = document.querySelector('.login-card');
    if (!loginCard) return;

    const loginBtn = loginCard.querySelector('.btn-block');
    const passwordInput = loginCard.querySelector('input[type="password"]');

    if (loginBtn && passwordInput) {
        loginBtn.addEventListener('click', function(e) {
            if (passwordInput.value === '22') {
                e.preventDefault();
                alert('Invalid password. Please enter the correct password.');
            }
        });
    }
});