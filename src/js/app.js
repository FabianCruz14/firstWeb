
document.addEventListener('DOMContentLoaded', function () {
    initApp();
});

// creamos la funcion que inicia la app y en ella llamamos a la funcion de crear la galeria
// dentro de esta funcion estarán las demás para que la app interactue
function initApp() {
    createGalery();
}

// en esta function, vamos a crear la galeria y la vamos a insertar en el documento,
// solo será de las miniaturas
function createGalery() {
    const galery = document.querySelector('.galery-images');
    for (let i = 1; i <= 12; i += 1) {
        const image = document.createElement('picture');
        image.innerHTML = `
            <source srcset="/build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="/build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="/build/img/thumb/${i}.jpg" 
            alt="imageGalery">
        `;
        // para que responda cuando le damos click a la miniatura debemos crear el 
        // sig callback
        image.onclick = function () {
            showImage(i);
        }
        // agregamos la imagen a la galeria
        galery.appendChild(image);
    }

}
function showImage(id) {
    const image = document.createElement('picture');
    image.innerHTML = `
            <source srcset="/build/img/grande/${id}.avif" type="image/avif">
            <source srcset="/build/img/grande/${id}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="/build/img/grande/${id}.jpg" 
            alt="imageGalery">
    `;
    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    overlay.classList.add('overlay');

    const body = document.querySelector('body');
    body.appendChild(image);
}