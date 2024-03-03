document.addEventListener('DOMContentLoaded', () => {
    // Obtener el ID del servicio desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const servicioId = urlParams.get('id');

    console.log(servicioId);

    if (servicioId) {
        // Obtener datos del servicio desde el servicio REST simulado (reemplaza esto con la llamada real al servicio REST)
        obtenerDetallesServicio(servicioId);
        // Llenar el formulario con los datos del servicio
        //llenarFormulario(servicio);
    } else {
        console.error('No se proporcionó un ID de servicio válido.');
    }
});

function obtenerDetallesServicio(id) {
    // Reemplaza la URL con la dirección real de tu servicio REST
    const url = `http://localhost:8080/services/${id}`;

    fetch(url)
    .then(response => {
        // Verificar si la solicitud fue exitosa (código 2xx)
        if (response.ok) {
            return response.text();
        }
        throw new Error('Error al obtener el servicio.');
    })
    .then(nombreServicio => {
        // Mostrar el nombre del servicio en el campo de texto
        document.getElementById('nombre').value = nombreServicio;
    })
    .catch(error => {
        console.error('Error:', error);
        // Puedes manejar el error según sea necesario (por ejemplo, mostrar un mensaje de error al usuario)
    });

}


function guardarCambios() {
    // Obtener el ID del servicio de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const idServicio = urlParams.get('id');

    // Obtener los datos actualizados del formulario
    const nombre = document.getElementById('nombre').value;

    // Construir el objeto de datos actualizados
    const datosActualizados = {
        nombre: nombre,
        // Agrega otros campos según sea necesario
    };

    // Enviar los datos actualizados al servicio REST para guardar los cambios (reemplaza la URL con la dirección real de tu servicio REST)
    const urlActualizar = `http://localhost:8080/services/update/${idServicio}`;

    fetch(urlActualizar, {
        method: 'PUT', // Puedes usar 'PATCH' en lugar de 'PUT' si tu servicio REST lo soporta
        headers: {
            'Content-Type': 'application/json',
            // Puedes incluir otros encabezados según sea necesario
        },
        body: JSON.stringify(datosActualizados),
    })
    .then(response => {
        // Verificar si la solicitud fue exitosa (código 2xx)
        if (response.ok) {
            console.log('Cambios guardados exitosamente.');
            window.location.href = 'search_services.html';
        } else {
            throw new Error('Error al intentar guardar los cambios.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}