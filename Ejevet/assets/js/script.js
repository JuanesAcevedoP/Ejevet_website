document.addEventListener("DOMContentLoaded", function () {
    fetch("../components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error cargando la navbar:", error));
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Página de tienda cargada. Se mostrará el mensaje de Próximamente.");
});