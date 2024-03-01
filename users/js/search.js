document.addEventListener('DOMContentLoaded', () => {
    // Ejecutar la función para cargar los servicios cuando la página esté cargada
    cargarUsuarios();
});

function cargarUsuarios() {
    // Aquí puedes hacer la llamada a tu servicio REST para obtener la lista de servicios
    // por ejemplo, utilizando la función fetch()

    fetch('http://localhost:8080/users/all', {
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

        const detallesElement = document.createElement('p');
        detallesElement.textContent = `ID: ${user.id}, Nombre: ${user.nombre},Apellido: ${user.apellido},Correo: ${user.correo},Teléfono: ${user.telefono},Dirección: ${user.direccion}`;

        userElement.appendChild(detallesElement);

        usersListContainer.appendChild(userElement);
    });
}

function mostrarMensajeError(mensaje) {
    const listContainer = document.getElementById('usersList');
    listContainer.innerHTML = `<p class="error-message">${mensaje}</p>`;
}