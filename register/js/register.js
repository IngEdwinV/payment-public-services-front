function registrarUsuario() {
    // Obtener valores de los campos de registro
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const password = document.getElementById("password").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;

    // Construir objeto con datos de registro
    const nuevoUsuario = {
        nombre: nombre,
        apellido: apellido,
        password: password,
        correo: correo,
        telefono: telefono,
        direccion: direccion
    };

    // Enviar datos al servicio REST para registrar el usuario
    fetch('tu_servicio_rest/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUsuario),
    })
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta del servicio REST
        if (data.success) {
            alert("Registro exitoso");
            // Puedes redirigir a otra página o realizar otras acciones necesarias
        } else {
            alert("Error en el registro");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Ocurrió un error en el registro");
    });
}
