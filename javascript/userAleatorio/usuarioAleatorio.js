/**
• La página https://randomuser.me/ permite obtener datos aleatorios de personas pensando 
en que los desarrolladores y otros profesionales puedan utilizarlos en sus pruebas y test.
• Las instrucciones de la API de este servicio gratuito están en la URL:
https://randomuser.me/documentation
• En todo caso la idea es hacer peticiones vía GET a la URL:
https://randomuser.me/api/
• Se pueden pasar parámetros para indicar cuántos usuarios aleatorios deseamos, el sexo, 
política de contraseñas, páginas, formato de respuesta, etc.
• En la página de documentación viene un ejemplo de la estructura ]SON de las respuestas. 
Como resumen indicamos que es un objeto formado por dos propiedades: results e info.
La primera es un array donde cada elemento lo forma un objeto con los datos del usuario 
aleatorio. La propiedad info contiene otros detalles entre los que destaca una semilla que
permite repetir una petición con los mismos datos y datos de paginación (cuando deseamos
dividir en páginas los resultados se debe usar la misma semilla).
• La aplicación mostrará la foto, nombre, apellido, email, dirección y estado al que pertenece el usuario.
Cada vez que actualicemos la página, se pedirá otro usuario. Ejemplo de
resultado:
*/

document.addEventListener('DOMContentLoaded', () => {

    //Elementos html
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let direction = document.querySelector('#direction');
    let srcImage = document.querySelector('#image');

    //Hacemos el fecth de usuario random
    fetch('https://randomuser.me/api').then(response => response.json()).then(data => {
    
        let results = data.results[0];
        
        //Integramos los datos en las etiquetas del html
        name.textContent = results.name.title + '  ' + results.name.first + '  ' + results.name.last;
        email.textContent = results.email;
        direction.textContent = '(' + results.location.country + ')  ' + results.location.city + ',  ' + results.location.street.name+ ',  ' + results.location.street.number;
        srcImage.setAttribute('src', `${results.picture.large}`);

    });


})