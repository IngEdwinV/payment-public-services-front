document.addEventListener('DOMContentLoaded', () => {
    // Ejecutar la función para cargar los servicios cuando la página esté cargada
    cargarUsuarios();
});

function cargarUsuarios() {
    // Aquí puedes hacer la llamada a tu servicio REST para obtener la lista de servicios
    // por ejemplo, utilizando la función fetch()

    fetch('tu_servicio_rest/usuarios')
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta del servicio REST
        if (data.length > 0) {
            mostrarUsuarios(data);
        } else {
            mostrarMensajeError("No se encontraron usuarios.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        mostrarMensajeError("Ocurrió un error al cargar los usuarios.");
    });
}

function mostrarUsuarios(users) {
    const usersListContainer = document.getElementById('usersList');
    
    // Limpiar el contenido existente
    usersListContainer.innerHTML = '';

    // Crear elementos para cada servicio y agregarlos al contenedor
    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.className = 'servicio';

        const nombreElement = document.createElement('h2');
        nombreElement.textContent = servicio.nombre;

        const detallesElement = document.createElement('p');
        detallesElement.textContent = `ID: ${servicio.id}, Descripción: ${servicio.descripcion}`;

        userElement.appendChild(nombreElement);
        userElement.appendChild(detallesElement);

        usersListContainer.appendChild(userElement);
    });
}

function mostrarMensajeError(mensaje) {
    const listContainer = document.getElementById('usersList');
    listContainer.innerHTML = `<p class="error-message">${mensaje}</p>`;
}