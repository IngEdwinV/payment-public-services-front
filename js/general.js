document.addEventListener('DOMContentLoaded', () => {
    // Verificar si hay una sesión activa
    const username = obtenerNombreUsuario();

    if (username) {
        document.getElementById('usernameDisplay').textContent = username;
    } else {
        // Si no hay sesión, redireccionar al inicio de sesión
        window.location.href = '../login/login.html';
    }
});

function cerrarSesion() {
    // Limpiar la sesión
    limpiarSesion();

    // Redireccionar al inicio de sesión
    window.location.href = '../login/login.html';
}

function obtenerNombreUsuario() {
    // Obtener el nombre de usuario almacenado en la sesión (esto es solo para fines educativos, en un entorno real, esto debe hacerse en el lado del servidor)
    return sessionStorage.getItem('username');
}

function limpiarSesion() {
    // Limpiar la sesión (esto es solo para fines educativos, en un entorno real, esto debe hacerse en el lado del servidor)
    sessionStorage.removeItem('username');
}