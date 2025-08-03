// let palabra = "Javascript";

// for(let i in palabra){
//     document.write(i, "<br>")
// }



let palabra = "murcielago";
vocal = 0;
for (let i in palabra) {
    if (palabra[i] == "a" || palabra[i] == "e" || palabra[i] == "i" || palabra[i] == "o" || palabra[i] == "u") {
        vocal++;
    }
}
document.write("Cantidad de vocales: ", vocal)