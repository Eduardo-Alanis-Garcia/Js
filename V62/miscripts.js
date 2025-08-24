let boton = document.getElementById("boton1");

function muestra_mensaje() {
    alert("Boton Presionado")
}

function pasar_mouse() {
    alert("Soy un MouseOver")
}

boton.addEventListener("mouseover", pasar_mouse)
boton.addEventListener("click", muestra_mensaje);