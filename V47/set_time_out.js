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
    console.log("Antes: ", elementotexto_alarma.textContent);
    elementotexto_alarma.textContent = "Encendido";
    elementotexto_alarma.style.color = "green";
    console.log("Despues: ", elementotexto_alarma.textContent);
}