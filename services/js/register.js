function registrarServicio() {
    const nombre = document.getElementById("nombre").value;

    // Validar que se proporcionó el nombre del servicio
    if (!nombre) {
        mostrarMensajeError("Por favor, ingrese el nombre del servicio.");
        return;
    }

    // Construir objeto con datos del servicio
    const nuevoServicio = {
        nombre: nombre
        // Puedes agregar más campos aquí según tu estructura de datos
    };

    // Enviar datos al servicio REST para registrar el servicio
    fetch('http://localhost:8080/services/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Credentials': 'true',

        },
        //body: formData,
        body: JSON.stringify({ nombre }),
    })
    .then(data => {
        // Manejar la respuesta del servicio REST
        if (data.ok) {
            mostrarMensajeExito("Registro de servicio exitoso");
            // Puedes redirigir a otra página o realizar otras acciones necesarias
        } else {
            mostrarMensajeError("Error en el registro del servicio");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        mostrarMensajeError("Ocurrió un error en el registro del servicio");
    });
}

function mostrarMensajeExito(mensaje) {
    const mensajeRegistro = document.getElementById('mensajeRegistro');
    mensajeRegistro.innerHTML = `<p class="success-message">${mensaje}</p>`;
}

function mostrarMensajeError(mensaje) {
    const mensajeRegistro = document.getElementById('mensajeRegistro');
    mensajeRegistro.innerHTML = `<p class="error-message">${mensaje}</p>`;
}
