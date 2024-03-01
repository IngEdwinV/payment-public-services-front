function registrarFactura() {
    const id = document.getElementById("id").value; 
    const servicio = document.getElementById("service_id").value; 
    const usuario = document.getElementById("usuario").value;
    const valor = document.getElementById("valor").value;
    const fecha = document.getElementById("fecha").value;

   // Construir objeto con datos de registro
   const nuevaFactura = {
    id: id,
    idUsuario: usuario,
    idServicio: servicio,
    valor: valor,
    fechaFactura: fecha
};

    // Enviar datos al servicio REST para registrar el servicio
    fetch('http://localhost:8080/factura', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Credentials': 'true',

        },
        //body: formData,
        body: JSON.stringify({nuevaFactura }),
    })
    .then(data => {
        // Manejar la respuesta del servicio REST
        if (data.ok) {
            mostrarMensajeExito("Registro de factura exitoso");
            // Puedes redirigir a otra página o realizar otras acciones necesarias
        } else {
            mostrarMensajeError("Error en el registro de factura");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        mostrarMensajeError("Ocurrió un error en el registro de factura");
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