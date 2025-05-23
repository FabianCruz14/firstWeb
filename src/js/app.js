document.addEventListener('DOMContentLoaded', function () {
    initApp();
});


// creamos la funcion que inicia la app y en ella llamamos a la funcion de crear la galeria
// dentro de esta funcion estarán las demás para que la app interactue
function initApp() {
    createGalery();
    scrollNav();
}
function scrollNav() {
    const enlaces = document.querySelectorAll('.nav-main a')
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => statement)

    });
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
    const overlay = document.createElement('div');
    overlay.appendChild(image);
    overlay.classList.add('overlay');
    overlay.onclick = function () {
        const body = document.querySelector('body')
        body.classList.remove('set-body')
        overlay.remove();
    }

    const closeModal = document.createElement('p');
    closeModal.textContent = 'x';
    closeModal.classList.add('btn-close');

    closeModal.onclick = function () {
        const body = document.querySelector('body')
        body.classList.remove('set-body')
        overlay.remove();
    }
    overlay.appendChild(closeModal);



    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('set-body');
}


