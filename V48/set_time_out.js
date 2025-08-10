function comenzar_tiempo() {
    let elementos_segundos = Number(document.getElementById("tiempo_elegido").value);
    if (isNaN(elementos_segundos) || elementos_segundos <= 0) {
        alert("Introduce un número válido mayor que 0");
        return;
    }
    setTimeout(tiempo_cumplido, elementos_segundos * 1000);
    console.log(`Temporizador: ${elementos_segundos} segundos`);
}


function tiempo_cumplido() {
    let elementotexto_alarma = document.getElementById("texto_alarma");
    let elemento_sonido_alarma = document.getElementById("audio_alarma");
    console.log("Antes: ", elementotexto_alarma.textContent);
    console.log("Sonido: ", elemento_sonido_alarma);

    elementotexto_alarma.textContent = "Encendido";
    elementotexto_alarma.style.color = "green";
    elemento_sonido_alarma.play();

    console.log("Despues: ", elementotexto_alarma.textContent);
    console.log("Despues: ", elemento_sonido_alarma);
}


let elemento_sonido_alarma = document.getElementById("audio_alarma");
console.log(elemento_sonido_alarma);