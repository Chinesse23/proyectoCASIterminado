function validateForm(event, formType) { 
    event.preventDefault(); 
    let username = document.getElementById('username').value;
    let email = formType !== 'login' ? document.getElementById('email').value : null;
    let password = document.getElementById('password').value;
    let confirmPassword = formType !== 'login' ? document.getElementById('confirmPassword').value : null;

    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!usernamePattern.test(username)) {
        alert('El nombre de usuario debe tener entre 3 y 20 caracteres y contener solo letras y números.');
        return false;
    }

    if (formType !== 'login' && !emailPattern.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return false;
    }

    if (!passwordPattern.test(password)) {
        alert('La contraseña debe tener al menos 8 caracteres, incluir al menos una letra y un número.');
        return false;
    }

    if (formType !== 'login' && password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    return true;
}
