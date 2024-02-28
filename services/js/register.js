function registrarServicio() {
    const nombreServicio = document.getElementById("nombre").value;

    // Validar que se proporcionó el nombre del servicio
    if (!nombreServicio) {
        mostrarMensajeError("Por favor, ingrese el nombre del servicio.");
        return;
    }

    // Construir objeto con datos del servicio
    const nuevoServicio = {
        nombre: nombreServicio
        // Puedes agregar más campos aquí según tu estructura de datos
    };

    // Enviar datos al servicio REST para registrar el servicio
    fetch('tu_servicio_rest/registro-servicio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoServicio),
    })
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta del servicio REST
        if (data.success) {
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
