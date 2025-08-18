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

    elementotexto_alarma.style.color = "green";
    elemento_sonido_alarma.play();

    console.log("Despues: ", elementotexto_alarma.textContent);
    console.log("Despues: ", elemento_sonido_alarma);
}

function comenzar_reloj() {
    setInterval(tictac, 1000)
}

let elementotexto_alarma = document.getElementById("texto_alarma");

function tictac() {
    let tiempo_actual = new Date();
    let hora = String(tiempo_actual.getHours()).padStart(2, "0");
    let minutos = String(tiempo_actual.getMinutes()).padStart(2,"0");
    let segundos = String(tiempo_actual.getSeconds()).padStart(2, "0");
    
    let texto_hora = hora + ":" + minutos + ":" + segundos;
    console.log(texto_hora);
    elementotexto_alarma.textContent = texto_hora;
}