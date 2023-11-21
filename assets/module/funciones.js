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
    <article data-id="${movie.id}" class="articleFavs lg:flex-wrap w-[350px] h-[750px] flex flex-col justify-between items-center gap-3 bg-gray-600 rounded px-4 pb-2 pt-5">
        <button class="buttonFavs">
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
    <article data-id="${movie.id}" class="articleFavs flex-wrap w-[350px] h-[750px] flex flex-col justify-between items-center gap-3 bg-gray-600 rounded px-4 pb-2 pt-5">
        <button class="buttonFavs">
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
    let opciones ='<option value="">All</option>'
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
export function filtroCruzado(input,select,movie,contenedor) {
    const tituloIngresado = input.value;
    const generoSeleccionado = select.value;
    const resultadoPorGenero=generoSeleccionado !== "" ? filtrarporgenero(movie,generoSeleccionado):[...movie]
    const resultadoPorTitulo=tituloIngresado !== "" ? filtrarPorTitulo(movie,tituloIngresado):[...movie]
    const resultadoFinal= resultadoPorGenero.filter(movie=> resultadoPorTitulo.includes(movie))
    contenedor.innerHTML=""
    if (resultadoFinal.length>0) {
        contenedor.innerHTML+= createTemplate(resultadoFinal)
    }
    else{
        contenedor.innerHTML="there are no matches..."
    }
}

export function creardatails (movie) {
    return `<div class="flex w-full flex-col justify-center pl-12 lg:flex lg:flex-row gap-3">
    <div class="flex items-center w-[200px] md:justify-center md:w-full flex-col lg:last:w-1/2 gap-4 ">
    <img class=" h-60 w-[250px] object-contain lg:w-[450px] lg:object-cover " src="https://moviestack.onrender.com/static/${movie.image}" alt="image">
    <table class="w-80 flex justify-center items-center lg:pl-12" >
    <tr>
    <th class="border p-2  h-14 border-black">original language</th>
    <td class="border p-2  border-black">"${movie.original_language}"</td>
    </tr>
    <tr>
    <th class="border p-2  h-14 border-black">release date</th>
    <td class="border p-2  border-black" >"${movie.release_date}"</td>
    </tr>
    <tr>
    <th class="border p-2  h-14 border-black">runtime</th>
    <td class="border p-2  border-black">"${movie.runtime}"</td>
    </tr>
    <tr>
    <th class="border p-2  h-14 border-black" >status</th>
    <td class="border p-2  border-black">"${movie.status}"</td>
    </tr>
    </table>
</div>
<section class="flex flex-col justify-center items-center lg:gap-10>
    <h2 class=" font-bold">${movie.title}</h2>
    <h3 class="font-semibold">${movie.tagline}</h3>
    <h4 class="font-semibold" >${movie.genres}</h4>
    <p class=" py-12 px-5">${movie.overview}</p>
    <table class="pl-15 lg:w-80">
    <tr>
    <th class="border p-2   border-black h-14">vote average</th>
    <td class="border p-2  border-black">${movie.vote_average}</td>
   </tr>
   <tr>
   <th class="border p-2  border-black h-14">budget</th>
   <td class="border p-2  border-black" >${movie.budget}</td>
  </tr>
  <tr>
  <th class="border p-2  border-black h-14">revenue</th>
  <td class="border p-2  border-black ">${movie.revenue}</td>
 </tr>
    </table>
</section>
</div>`
}