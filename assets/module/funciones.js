export function createTemplate(listMovie) {
    let template= ""
    for (const movie of listMovie) {
     template += crearCard(movie)
    } 
    return template
 }
 export function crearCard(movie) {
    const comprobarArticle=JSON.parse(localStorage.getItem("like"))
 if(comprobarArticle.some(item=> item.id===movie.id)){
    return `
    <article data-id="${movie.id}" class="articleFavs flex-wrap w-[350px] h-[650px] flex flex-col justify-between items-center gap-3 bg-gray-600 rounded px-4 pb-2 pt-5">
        <button class="buttonFavs" data-aggFavs="agregar" data-id="${movie.id}">
            <img data-id="${movie.id}" class="imageFavs w-[40px] h-[30px] flex items" src="../Recursos Moviestack/like-rojo.png" alt="">
        </button>
        <img class="rounded-md" src="https://moviestack.onrender.com/static/${movie.image}" alt="image">
        <h2 class="text-center font-bold">${movie.title} </h2>
        <h3 class="text-center font-semibold">${movie.tagline}</h3>
        <p class=" text-sm object-contain">${movie.overview}</p>
        <a class="border bg-slate-800 font-semibold text-white p-3 w-2/3 text-center" href="./detalles.html?id=${movie.id}">see more information</a>
    </article>`;
} else {
return `
    <article data-id="${movie.id}" class="articleFavs flex-wrap w-[350px] h-[650px] flex flex-col justify-between items-center gap-3 bg-gray-600 rounded px-4 pb-2 pt-5">
        <button class="buttonFavs" data-aggFavs="agregar" data-id="${movie.id}">
            <img data-id="${movie.id}" class="imageFavs w-[40px] h-[30px] flex items" src="../Recursos Moviestack/like_vacio.png" alt="">
        </button>
        <img class="rounded-md" src="https://moviestack.onrender.com/static/${movie.image}" alt="image">
        <h2 class="text-center font-bold">${movie.title} </h2>
        <h3 class="text-center font-semibold">${movie.tagline}</h3>
        <p class="text-sm object-contain">${movie.overview}</p>
        <a class="border bg-slate-800 font-semibold text-white p-3 w-2/3 text-center" href="./detalles.html?id=${movie.id}">see more information</a>
    </article>`;
}

} 
export function crearOpciones(generos,contenedor) {
    let opciones =""
    for (const genero of generos) {
    opciones += crearGeneros (genero)
contenedor.innerHTML= opciones
}}
function crearGeneros(genero) {
    return`<option value="${genero}">${genero}</option>`
}

export function filtrarPorTitulo(listMovie,title) {
    const filtro= listMovie.filter( movie => movie.title.toLowerCase().startsWith(title.toLowerCase()))
    return filtro
}
export function cardFiltrada(lista, donde,fn) {
    let template=""
    for (const elementoIterado of lista) {
        template += fn(elementoIterado)
    }
    if (template) {
    donde.innerHTML=template
    }
    else{
        donde.innerHTML=template=`<h2 class=" text-5xl font-semibold">there are no matches...</h2>`
    }
}
export function filtrarporgenero(movies, genero) {
    const filtro = movies.filter(movie => movie.genres.indexOf(genero)!=-1)
     return filtro
}
export function creardatails (movie) {
    return `<div class="flex flex-col w-1/2 gap-4">
    <img src="https://moviestack.onrender.com/static/${movie.image}" alt="image">
    <table>
    <tr>
    <th class="border p-2 w-60 h-14 border-black">original language</th>
    <td class="border p-2 w-20 border-black">"${movie.original_language}"</td>
    </tr>
    <tr>
    <th class="border p-2 w-60 h-14 border-black">release date</th>
    <td class="border p-2 w-20 border-black" >"${movie.release_date}"</td>
    </tr>
    <tr>
    <th class="border p-2 w-60 h-14 border-black">runtime</th>
    <td class="border p-2 w-20 border-black">"${movie.runtime}"</td>
    </tr>
    <tr>
    <th class="border p-2 w-60 h-14 border-black" >status</th>
    <td class="border p-2 w-20 border-black">"${movie.status}"</td>
    </tr>
    </table>
</div>
<section class="flex flex-col w-1/2 items-center gap-10">
    <h2 class=" font-bold">${movie.title}</h2>
    <h3 class="font-semibold">${movie.tagline}</h3>
    <h4 class="font-semibold" >${movie.genres}</h4>
    <p class="py-12 px-5">${movie.overview}</p>
    <table>
    <tr>
    <th class="border p-2  w-60  border-black h-20">vote average</th>
    <td class="border p-2 w-1/3 border-black">${movie.vote_average}</td>
   </tr>
   <tr>
   <th class="border p-2  w-60 border-black h-20">budget</th>
   <td class="border p-2 w-1/3 border-black" >${movie.budget}</td>
  </tr>
  <tr>
  <th class="border p-2  w-60 border-black h-20">revenue</th>
  <td class="border p-2 w-1/3 border-black ">${movie.revenue}</td>
 </tr>
    </table>
</section>`
}