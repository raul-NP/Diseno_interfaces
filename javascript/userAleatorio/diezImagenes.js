document.addEventListener('DOMContentLoaded', async () => {
    
    const div = document.getElementById('images');
    const images = [];

    //Cargamos las 10 imágenes
    console.log('Comenzando...');
    for (let i = 0; i < 10; i++) {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        images.push(data.results[0].picture.large);
        
        //Creamos el elemento imagen y se lo añadimos al div general de imagenes
        let img = document.createElement('img');
        img.setAttribute('src', images[i]);
        div.appendChild(img)
    }
    console.log('Terminó');

});