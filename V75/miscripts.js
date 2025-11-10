async function crearPost(titulo, contenido) {
    try {
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                title: titulo,
                body: contenido,
                userId: 1,
            })
        });
        if (!respuesta.ok) {
            throw new Error('Error en la respuesta de la red: ', respuesta.statusText);
        }
        let datos = await respuesta.json();
        console.log('Post creado: ', datos);
    } catch (error) {
        console.error('Error al crear el post: ', error);
    }
    
}

crearPost("Mi nuevo post", "Este es el contenido de mi nuevo post.");