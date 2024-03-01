document.addEventListener('DOMContentLoaded', () => {
    // Ejecutar la función para cargar los servicios cuando la página esté cargada
    cargarServicios();
});

function cargarServicios() {
    // Aquí puedes hacer la llamada a tu servicio REST para obtener la lista de servicios
    // por ejemplo, utilizando la función fetch()

    fetch('http://localhost:8080/services/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Credentials': 'true',

        }
    })
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

    console.log(servicios);

    // Crear elementos para cada servicio y agregarlos al contenedor
    servicios.forEach(servicio => {
        const servicioElement = document.createElement('div');
        servicioElement.className = 'servicio';

        const detallesElement = document.createElement('p');
        detallesElement.textContent = `Name: ${servicio}`;

        servicioElement.appendChild(detallesElement);

        servicesListContainer.appendChild(servicioElement);
    });
}

function mostrarMensajeError(mensaje) {
    const servicesListContainer = document.getElementById('servicesList');
    servicesListContainer.innerHTML = `<p class="error-message">${mensaje}</p>`;
}