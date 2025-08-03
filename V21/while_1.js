// let f = 1;

// while (f <= 10){
//     document.write("Vuelta no. ", f, "<br>");
//     f ++;
// }
// document.write("Fin del bucle")





let f = 1;
let suma = 0;
let valor;

while (f <= 5) {
    valor = parseInt(prompt("Ingrese valor"));
    suma = suma + valor;
    f++;
}

document.write("La suma es ", suma, "<br>")