document.addEventListener('DOMContentLoaded', () => {
    // Ejecutar la función para cargar los servicios cuando la página esté cargada
    cargarServicios();
});

function cargarServicios() {
    // Aquí puedes hacer la llamada a tu servicio REST para obtener la lista de servicios
    // por ejemplo, utilizando la función fetch()

    fetch('tu_servicio_rest/servicios')
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta del servicio REST
        if (data.length > 0) {
            mostrarServicios(data);
        } else {
            mostrarMensajeError("No se encontraron servicios.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        mostrarMensajeError("Ocurrió un error al cargar los servicios.");
    });
}

function mostrarServicios(servicios) {
    const servicesListContainer = document.getElementById('servicesList');
    
    // Limpiar el contenido existente
    servicesListContainer.innerHTML = '';

    // Crear elementos para cada servicio y agregarlos al contenedor
    servicios.forEach(servicio => {
        const servicioElement = document.createElement('div');
        servicioElement.className = 'servicio';

        const nombreElement = document.createElement('h2');
        nombreElement.textContent = servicio.nombre;

        const detallesElement = document.createElement('p');
        detallesElement.textContent = `ID: ${servicio.id}, Descripción: ${servicio.descripcion}`;

        servicioElement.appendChild(nombreElement);
        servicioElement.appendChild(detallesElement);

        servicesListContainer.appendChild(servicioElement);
    });
}

function mostrarMensajeError(mensaje) {
    const servicesListContainer = document.getElementById('servicesList');
    servicesListContainer.innerHTML = `<p class="error-message">${mensaje}</p>`;
}