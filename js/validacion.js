document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Limpiar mensajes anteriores
    document.querySelectorAll('.error-message').forEach(span => span.textContent = '');
    document.querySelectorAll('.form__contact').forEach(input => input.classList.remove('input-error'));


    let isValid = true;

    const nombre = document.getElementById('nombre').value.trim();
    const rut = document.getElementById('rut').value.trim();
    const region = document.getElementById('region').value.trim();
    const comuna = document.getElementById('comuna').value.trim();
    const email = document.getElementById('email').value.trim();
    const celular = document.getElementById('celular').value.trim();

    // Regex
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
    const regexRut = /^\d{7,8}-[0-9kK]{1}$/; // formato chileno
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexCelular = /^(\+56)?9\d{8}$/; // formato chileno

    if (!regexNombre.test(nombre)) {
        document.getElementById('errorNombre').textContent = 'Ingrese un nombre válido.';
        document.getElementById('nombre').classList.add('input-error'); // Ejemplo para el nombre
        isValid = false;
    }

    if (!regexRut.test(rut)) {
        document.getElementById('errorRut').textContent = 'Ingrese un RUT válido (Ej: 12345678-9).';
        document.getElementById('nombre').classList.add('input-error'); // Ejemplo para el nombre
        isValid = false;
    }

    if (region.length < 3) {
        document.getElementById('errorRegion').textContent = 'Ingrese una región válida.';
        document.getElementById('nombre').classList.add('input-error'); // Ejemplo para el nombre
        isValid = false;
    }

    if (comuna.length < 3) {
        document.getElementById('errorComuna').textContent = 'Ingrese una comuna válida.';
        document.getElementById('nombre').classList.add('input-error'); // Ejemplo para el nombre
        isValid = false;
    }

    if (!regexEmail.test(email)) {
        document.getElementById('errorEmail').textContent = 'Ingrese un correo electrónico válido (Ej: correo@gmail.com).';
        document.getElementById('nombre').classList.add('input-error'); // Ejemplo para el nombre
        isValid = false;
    }

    if (!regexCelular.test(celular)) {
        document.getElementById('errorCelular').textContent = 'Ingrese un celular válido (Ej: +56912345678).';
        document.getElementById('nombre').classList.add('input-error'); // Ejemplo para el nombre
        isValid = false;
    }

    if (isValid) {
        alert('Formulario enviado correctamente.');
        this.submit(); // Si quieres realmente enviarlo
         window.location.href = 'confirmacion.html';
    }
});
