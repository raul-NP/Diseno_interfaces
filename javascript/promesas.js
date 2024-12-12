document.addEventListener('DOMContentLoaded', () => {

    //Funcion que genera un temporizador con x milisegundos
    function generarTempo(miliseconds){

        var promesa = new Promise((resolve, reject) => {
            var temp = setTimeout(() => {
                clearTimeout(temp2);
                resolve('Tiempo concluido');
            }, miliseconds);

            var temp2 = setTimeout(() => {
                reject('El tiempo no va bien');
            }, miliseconds*2);
        })

        return promesa;
    }
    generarTempo(1000).then((element) => {console.log(element)})

    //--------------------------------------------------------------------------
    
    //Función cuenta atrás mostrada en un elemento
    function count(count, callback, element = document.body, interval = 1000) {
        return new Promise(function(resolve, reject) {
            element.textContent = count;
            
            const id = setInterval(function() {
                if (--count === 0) {
                    clearInterval(id);
                    callback();
                    resolve();
                }
                element.textContent = count;
            }, interval);
        });
    }

    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');

    count(6, () => {}, p1, 1000);
    count(60, () => { console.log('Fin'); }, p2, 100);

})