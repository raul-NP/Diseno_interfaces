document.addEventListener('DOMContentLoaded', () => {

    //Conocer latitudd y altitud en la que nos encontramos ubicados
    navigator.geolocation.getCurrentPosition(function(position){
        document.getElementById('latitud').innerText = position.coords.latitude;
        document.getElementById('longitud').innerText = position.coords.longitude;
    });

})