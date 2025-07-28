let nombre, edad;
nombre = prompt("Ingrese su nombre:");
edad = prompt("Ingrese su edad:");
edad = parseInt(edad);


if (edad >= 18) {
    document.write("Bienvenido " + nombre + ", eres mayor de edad.");
}else {
    if(edad < 18) {
        document.write("Lo siento " + nombre + ", eres menor de edad.");
    } else {
        document.write("No has ingresado una edad válida.");
    }
}
