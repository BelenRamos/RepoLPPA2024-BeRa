document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('subscription-form');
    var title = document.getElementById('form-title');
    var fullNameField = document.getElementById('fullName');

    fullNameField.addEventListener('input', function() {
        title.textContent = 'HOLA ' + fullNameField.value.toUpperCase();
    });

    form.addEventListener('blur', function(event) {
        validateField(event.target);
    }, true);

    form.addEventListener('focus', function(event) {
        clearValidation(event.target);
    }, true);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var fields = form.elements;
        var isValid = true;
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (!validateField(field)) {
                isValid = false;
            }
        }
        if (isValid) {
            showAlert('Formulario enviado correctamente');
        } else {
            showAlert('Corrige los errores antes de enviar el formulario');
        }
    });
});

function validateField(field) {
    var error = '';
    switch (field.name) {
        case 'fullName':
            if (!/.{6,}/.test(field.value) || !/\s/.test(field.value)) {
                error = 'El nombre debe tener más de 6 letras y al menos un espacio.';
            }
            break;
        case 'email':
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                error = 'Ingrese un email válido.';
            }
            break;
        case 'password':
            if (!/(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/.test(field.value)) {
                error = 'La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.';
            }
            break;
        case 'confirmPassword':
            var password = document.getElementById('password').value;
            if (field.value !== password) {
                error = 'Las contraseñas no coinciden.';
            }
            break;
        case 'age':
            if (!/^\d+$/.test(field.value) || parseInt(field.value, 10) < 18) {
                error = 'La edad debe ser un número entero mayor o igual a 18.';
            }
            break;
        case 'phone':
            if (!/^\d{7,}$/.test(field.value)) {
                error = 'El teléfono debe tener al menos 7 dígitos.';
            }
            break;
        case 'address':
            if (!/.{5,}/.test(field.value) || !/\s/.test(field.value)) {
                error = 'La dirección debe tener al menos 5 caracteres y un espacio.';
            }
            break;
        case 'city':
            if (field.value.length < 3) {
                error = 'La ciudad debe tener al menos 3 caracteres.';
            }
            break;
        case 'postalCode':
            if (field.value.length < 3) {
                error = 'El código postal debe tener al menos 3 caracteres.';
            }
            break;
        case 'dni':
            if (!/^\d{7,8}$/.test(field.value)) {
                error = 'El DNI debe tener 7 u 8 dígitos.';
            }
            break;
        default:
            break;
    }

    if (error) {
        field.classList.add('is-invalid');
        field.nextElementSibling.textContent = error;
        return false;
    } else {
        field.classList.remove('is-invalid');
        return true;
    }
}

function clearValidation(field) {
    field.classList.remove('is-invalid');
    field.nextElementSibling.textContent = '';
}

function showAlert(message) {
    alert(message);
}
