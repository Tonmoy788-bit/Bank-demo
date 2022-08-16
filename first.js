console.log('index.html');
document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;


    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    if (email === 'sontanar@baap.com' && password === 'secret') {
        window.location.href = 'Banks.html';
    }
    else {
        alert('toka ami tajo sontan ghosona korlam')
    }
})