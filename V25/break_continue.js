// for (let i = 0; i < 10; i++) {
//     document.write(i, "<br>" );
//     if (i == 3) {
//         document.write("Aqui es la vuelta: ", i, "<br>");
//         break;
//     }
// }



let palabra = "Javascript";
let resultado = "";

for (let i in palabra) {
    if (palabra[i] == "a"){
        continue;
    }else{
        resultado += palabra[i];
    }
}
document.write(resultado);