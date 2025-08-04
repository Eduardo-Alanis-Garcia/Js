class Persona {
    nombre = "Homero";
    apellido = "Simpson";
    direccion = "Ave. Siemrpeviva 742";
    telefono = 55118416240;
    email = "eag.eleven1@gmail.com"

    trabajar(){
        return "Trabaja en la planta nuclear";
    }

    estudiar(){
        return "Escuela primaria de Sprinfield";
    }
}

const homero = new Persona();
const bart = new Persona();
const lenny = new Persona();

document.write(homero.nombre, " ", homero.apellido, "<br>");
document.write(homero.trabajar(), "<br>");

document.write("Bart ", bart.apellido, "<br>");
document.write("Estudia en: ", bart.estudiar(), "<br>");

document.write("Lenny trabaja en ", lenny.trabajar, "<br>")