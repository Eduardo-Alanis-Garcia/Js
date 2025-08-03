function saludar() {
    let saludo = prompt("Ingrese un saludo");
    alert(saludo);
    document.write("Hola a todos ", "<br>")
    despedir()
}
saludar();

function despedir() {
    document.write("Adios a todos ", "<br>")   
}