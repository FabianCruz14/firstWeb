document.addEventListener('DOMContentLoaded', function () {
    initApp();
});

function initApp() {
    createGalery();
}

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
        galery.appendChild(image);
    }
}
