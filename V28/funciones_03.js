let resultado
function suma(a,b){
    resultado = a + b
    return resultado;
}
document.write(suma(30, 60), "<br>");


/////////////////////////////////

function saludar(){
    return "Hola a todos";
}
var mensaje = saludar();
document.write(mensaje, "<br>");

function Vercolor(valor){
    valor = parseInt(prompt("Infrese valor de 1 al 3"));
    switch (valor) {
        case 1:
            return "Rojo";
            break;
        case 2:
            return "Verde";
            break;
        case 3:
            return "Amarillo";
            break;
    
        default:
            return "Valor incorrecto"
            break;
    }
}

document.write(Vercolor());

