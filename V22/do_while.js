// let valor;
// do{
//     valor = parseInt(prompt("Ingrese valor 1 para salir.."));
//     document.write("Ingresó valor: ", valor, "<br>")
// }while(valor != 1);
// document.write("Fin del bucle")




let usuario, clave, control;

control = 0;
usuario = prompt("Ingrese usuario ");
clave = prompt("Ingrese su contraseña ");

do {
    if(clave != "Miacceso33%"){
        clave = prompt("Clave incorrecta \n" + "Intente de nuevo");
        control = 0;
    }else{
        control = 1;
    }
} while (control != 1);
document.write("Acceso correcto!")