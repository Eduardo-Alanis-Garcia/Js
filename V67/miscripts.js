let audio = document.getElementById("audio");
let listacanciones = document.getElementById("listaCanciones");


listacanciones.addEventListener("change", cambiarCancion);

function cambiarCancion() {
    let cancionELegida = listacanciones.value;
    audio.src = cancionELegida;
    audio.play();

    let evento = new CustomEvent("CambioDeCancion");
    audio.dispatchEvent(evento);
}

cambiarCancion()

audio.addEventListener("CambioDeCancion", mostrarCancion);

function mostrarCancion() {
    console.log("Cancion actual: ", listacanciones.value)
}