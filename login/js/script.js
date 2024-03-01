function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('tu_servicio_rest/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Inicio de sesión exitoso");
        } else {
            alert("Error en el inicio de sesión");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Ocurrió un error en el inicio de sesión");
    });
}
