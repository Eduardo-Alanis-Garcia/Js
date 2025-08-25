let boton = document.getElementById("boton1");
let div1 = document.getElementById("div1");
let enlace = document.getElementById("enlace1");

function bloqueo_enlace(event) {
    event.preventDefault();
    alert("Enlace deshabilitado");
}




function mostrarMensaje(event) {
    alert(event.target); // Muestra el elemento que disparó el evento
    alert(event.currentTarget); //  El div en donde esta
}
// boton.addEventListener("click", mostrarMensaje);
div1.addEventListener("click", mostrarMensaje);
enlace.addEventListener("click", bloqueo_enlace);

