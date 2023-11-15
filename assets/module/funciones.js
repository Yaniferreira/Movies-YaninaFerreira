export function createTemplate(listMovie) {
    let template= ""
    for (const movie of listMovie) {
     template += crearCard(movie)
    } 
    return template
 }
export function crearCard (movie) {
    return `<article class=" flex-wrap w-[350px] flex flex-col justify-center items-center gap-3 bg-gray-600 rounded px-4 pb-2 pt-5">
    <img class="rounded-md" src="${movie.image}" alt="image">
    <h2 class="text-center font-bold">${movie.title} </h2>
    <h3 class="text-center font-semibold">${movie.tagline}</h3>
    <p>${movie.overview}</p>
    <a class=" border bg-slate-800 font-semibold text-white p-3 w-2/3 text-center" href="./detalles.html?id=${movie.id}">see more information</a>
    </article>`
} 
export function crearOpciones(generos,contenedor) {
    let opciones =""
    for (const genero of generos) {
    opciones += crearGeneros (genero)
contenedor.innerHTML= opciones
}}
export function crearGeneros(genero) {
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
    <img src="${movie.image}" alt="image">
    <table>
    <tr>
    <th class="border p-2 w-full border-black">original language</th>
    <td class="border p-2 w-full border-black">"${movie.original_language}"</td>
    </tr>
    <tr>
    <th class="border p-2 w-full border-black">release date</th>
    <td class="border p-2 w-full border-black" >"${movie.release_date}"</td>
    </tr>
    <tr>
    <th class="border p-2 w-full border-black">runtime</th>
    <td class="border p-2 w-full border-black">"${movie.runtime}"</td>
    </tr>
    <tr>
    <th class="border p-2 w-full border-black" >status</th>
    <td class="border p-2 w-full border-black">"${movie.status}"</td>
    </tr>
    </table>
</div>
<section class="flex flex-col w-1/2 items-center">
    <h2 class=" font-bold">${movie.title}</h2>
    <h3 class="font-semibold">${movie.tagline}</h3>
    <h4 class="font-semibold" >${movie.genres}</h4>
    <p >${movie.overview}</p>
    <table>
    <tr>
    <th class="border p-2 w-full border-black">vote average</th>
    <td class="border p-2 w-full border-black">${movie.vote_average}</td>
   </tr>
   <tr>
   <th class="border p-2 w-full border-black">budget</th>
   <td class="border p-2 w-full border-black" >${movie.budget}</td>
  </tr>
  <tr>
  <th class="border p-2 w-full border-black">revenue</th>
  <td class="border p-2 w-full border-black">${movie.revenue}</td>
 </tr>
    </table>
</section>`
}