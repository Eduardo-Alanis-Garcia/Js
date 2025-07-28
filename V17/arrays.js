// declaracion de un array
let numeros = [15, 80, 650, 50.3, -10];
document.write("Array original: " + numeros + "<br>");

// Acceso a un elemento del array
document.write("Primer elemento: " + numeros[0] + "<br>");

// Modificación de un elemento del array
numeros[0] = 14;
document.write("Array modificado: " + numeros + "<br>");


let frutas = ["manzana", "peras", "naranjas", "mangos"];
document.write("Array de frutas: " + frutas + "<br>");


// Metodos de los arrays

// Ver cantidad de elementos
document.write("Cantidad de elementos en el array de frutas: " + frutas.length + "<br>");

// Saber ultimo elemento
document.write("Ultimo elemento del array de frutas: " + frutas[frutas.length - 1] + "<br>");

// Arrays en tipo texto
document.write("En string: ", numeros.toString() , "<br>");

// Unir arrays
let letras = ["a", "b", "c"];
let numeros2 = [1, 2, 3];
document.write("Unir arrays: ", letras.concat(numeros2), "<br>");

// Borrar elemento del array
numeros.pop();
document.write("Array despues de borrar el ultimo elemento: " + numeros + "<br>");

// Añadir elemento al final del array
numeros.push(-10);
document.write("Array despues de añadir un elemento al final: " + numeros + "<br>");

// Eliminar el primer elemento del array
numeros.shift();
document.write("Array despues de eliminar el primer elemento: " + numeros + "<br>");

// Añadir un elemento al principio del array
numeros.unshift(14);
document.write("Array despues de añadir un elemento al principio: " + numeros + "<br>");

// Eliminar un elemento en una posicion especifica
numeros.splice(2, 3); // Elimina 3 elementos a partir de la posicion 2
document.write("Array despues de eliminar elementos en una posicion especifica: " + numeros + "<br>");

// Como copiar un array
let cantidades = [100, 200, 500, 600, 800];
let copia = cantidades.slice(1, 4); // Copia el array
document.write("Array original: " + cantidades + "<br>");
document.write("Array copiado: " + copia + "<br>");

// Ordenar un array
document.write(frutas.sort() + "<br>");

let objetos = ["carro", "botella", "planeta", "zorro"];
document.write("Array de objetos: " + objetos + "<br>");
document.write("Array de objetos ordenado: " + objetos.sort() + "<br>");

// Invertir un array
document.write("Array de frutas invertido: " + objetos.reverse() + "<br>");