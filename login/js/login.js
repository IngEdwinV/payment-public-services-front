function login() {
    const correo = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Usar FormData para construir la solicitud
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Credentials': 'true',

        },
        //body: formData,
        body: JSON.stringify({ correo, password }),
    })
    .then(data => {
        console.log(data);
        if (data.ok) {
            alert("Inicio de sesión exitoso");
            sessionStorage.setItem('username',correo)
            window.location.href = '../../index/index.html';
        } else {
            alert("Error en el inicio de sesión");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        //alert("Ocurrió un error en el inicio de sesión");
    });
}
