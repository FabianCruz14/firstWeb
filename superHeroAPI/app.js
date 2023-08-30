// script.js
document.addEventListener("DOMContentLoaded", () => {
    displayHeroInfo(); // Llamamos a la función para mostrar la información del superhéroe al cargar la página
});

function displayHeroInfo() {
    const heroId = 69; // ID predefinido del superhéroe (por ejemplo, Superman)
    const heroCard = document.getElementById("heroCard");

    fetch(`https://superheroapi.com/api/3161326367507697/${heroId}`)
        .then(response => response.json())
        .then(hero => {
            heroCard.innerHTML = `
                <div class="card">
                    <img src="${hero.image.url}" class="card-img-top" alt="${hero.name}">
                    <div class="card-body">
                        <h5 class="card-title">${hero.name}</h5>
                        <p class="card-text">Publisher: ${hero.biography.publisher}</p>
                    </div>
                </div>
            `;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
