// we use DOM to interact whit a html doc
const allTabsInfo = document.querySelectorAll('.tab-info')
const allTabsHead = document.querySelectorAll('.tab')
const searchInput = document.querySelector('.input-text')
const searchButton = document.querySelector('.boton')

const superHeroeList = document.querySelector('.sh-list')

// creamos una funcion llamada buscar super heroes
function searchSuperHeroes(query) {
    fetch(`https://superheroapi.com/api/3161326367507697/search${query}`)
        .then(res => res.json())
        .then(data => {
            superHeroeList.innerHTML = ''
            if (data.response == 'error') {
                superHeroeList.innerHTML = `<p>Superheroes not found</p>`
            } else {
                data.forEach(heroe => {
                    const heroeCard = document.createElement('div')
                    heroeCard.classList.add('heroe-card')
                    heroeCard.innerHTML = `
                    <h2>${superhero.name}</h2>
                    <p>Full Name: ${superhero.biography['full-name']}</p>
                    <p>Series: ${superhero.biography['publisher']}</p>
                    <img src='${superhero.image.url}' height="200px" width="150px"/>
                    `
                });
                superHeroeList.appendChild(heroeCard)
            }
        })
}

searchButton.addEventListener('click', function () {
    const countryText = searchInput.value.trim()

    if (countryText.length > 2) {
        searchCountries(countryText)
    } else {
        countryList.innerHTML = `<p>Enter at least 3 characters to search </p>`
    }
})





















//we created a event in a buton to search
searchButton.addEventListener('click', function () {
    const shText = searchInput.value.trim()

    if (shText.length > 2) {
        search
    }
})
