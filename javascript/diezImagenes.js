document.addEventListener('DOMContentLoaded', async () => {
    
    const images = [];

    //Cargamos las 10 imágenes
    console.log('Comenzando...');
    for (let i = 0; i < 10; i++) {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        images.push(data.results[0].picture.large);
    }
    console.log('Terminó');
    console.log(images);

});