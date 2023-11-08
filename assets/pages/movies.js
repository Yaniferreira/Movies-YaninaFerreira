function crearcards(movies) {
    return`
    <article>
    <img src="${movies.image}" alt="${movies.title}" >
    <h3 class=" font-semibold" text.1xl >${movies.title}</h3>
    <h4>${movies.tagline}</h4>
    <p>${movies.overview}</p>
    </article> 
    `;
}
const contenedorCard = document.getElementById("contenedorCard")
function addCard(movies, contenedorCard) {
    let template = ""
    for (const movie of movies) {
        template +=  crearcards(movies)
    }
    contenedorCard.innerHTML += template
}

 addCard(movies,contenedorCard)