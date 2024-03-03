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

    // Limpiar la tabla antes de agregar nuevas filas
    const tablaServicios = document.getElementById('tablaServicios');
    const tbody = tablaServicios.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    // Iterar sobre los servicios y agregar filas a la tabla
    servicios.forEach(servicio => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${servicio.id}</td>
            <td>${servicio.nombre}</td>
            <td>
                <button class="button" onclick="editarServicio(${servicio.id})">Editar</button>
                <button class="button" onclick="confirmarEliminar(${servicio.id})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(fila);
    });

}

function mostrarMensajeError(mensaje) {
    const servicesListContainer = document.getElementById('servicesList');
    servicesListContainer.innerHTML = `<p class="error-message">${mensaje}</p>`;
}

function editarServicio(id) {
    // Redirigir a la página de edición con el ID del servicio (reemplaza 'editarServicio.html' con la URL real)
    window.location.href = `edit_service.html?id=${id}`;
}


function confirmarEliminar(id) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este servicio?');

    if (confirmacion) {
        // Llamar al servicio REST para eliminar el servicio (reemplaza esto con la llamada real al servicio REST)
        eliminarServicio(id);

        // Actualizar la tabla después de la eliminación (puedes recargar la página o actualizar la tabla sin recargar)
        // Por simplicidad, aquí volvemos a cargar la página
        window.location.reload();
    }
}

function eliminarServicio(id) {
    // Simulación de eliminación de servicio (reemplaza esto con la llamada real al servicio REST)
    console.log(`Eliminando servicio con ID: ${id}`);
    const url = `http://localhost:8080/services/${id}`;
    fetch(url, {
        method: 'DELETE',
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
        if (data.ok) {
           alert("Se ha eliminado el servicio")
        } else {
            mostrarMensajeError("No se encontraron servicios.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        mostrarMensajeError("No se puede realizar la eliminación");
    });
}