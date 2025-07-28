// let continente, edad;
// continente = prompt("Ingrese su continente:");
// edad = prompt("Ingrese su edad:");

// if (continente == "America" && edad >= 18) {
//     document.write("Bienvenido, eres mayor de edad en America.");
// }else{
//     document.write("O no eres adulto o no estás en America.");
// }


let dia, mes, anio;
dia = prompt("Ingrese el día:");
mes = prompt("Ingrese el mes:");
anio = prompt("Ingrese el año:");

if (mes == 1 || mes == 2 || mes == 3) {
    document.write("Estamos en el primer trimestre del año.");
} else{
    document.write("No estamos en el primer trimestre del año.");
}