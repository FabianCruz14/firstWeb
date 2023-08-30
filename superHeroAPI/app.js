
function searchSuperhero() {
    const searchInput = document.getElementById("searchInput").value;
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    // Simulamos la respuesta de la API con datos de ejemplo
    const exampleResponse = {
        results: [
            {
                name: "Superman",
                image: {
                    url: "https://example.com/superman.jpg"
                },
                biography: {
                    publisher: "DC Comics"
                }
            }
        ]
    };

    const heroes = exampleResponse.results;

    heroes.forEach(hero => {
        const heroCard = document.createElement("div");
        heroCard.classList.add("col-md-4", "mb-4");
        heroCard.innerHTML = `
            <div class="card">
                <img src="${hero.image.url}" class="card-img-top" alt="${hero.name}">
                <div class="card-body">
                    <h5 class="card-title">${hero.name}</h5>
                    <p class="card-text">Publisher: ${hero.biography.publisher}</p>
                </div>
            </div>
        `;
        resultsContainer.appendChild(heroCard);
    });
}
