// let valor;
// valor = parseInt(prompt("Ingrese un número del 1 al 3:"));

// switch (valor) {
//     case 1:
//         document.write("Usted ha ingresado 1.");
//         break;
//     case 2:
//         document.write("Usted ha ingresado 2.");
//         break;
//     case 3:
//         document.write("Usted ha ingresado 3.");
//         break;
//     default:
//         document.write("Usted no ha ingresado un número válido.");
//         break;
// }



let color;
color = prompt("Ingrese un color (rojo, verde, azul):");

switch (color.toLocaleLowerCase()) {
    case "rojo":
        document.write("Usted ha elegido el color rojo.");
        break;
    case "verde":
        document.write("Usted ha elegido el color verde.");
        break;
    case "azul":
        document.write("Usted ha elegido el color azul.");
        break;

    default:
        document.write("Usted no ha elegido un color válido.");
        break;
}