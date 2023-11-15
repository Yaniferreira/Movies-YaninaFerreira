/*<article class=" w-[350px] flex flex-col gap-3 bg-gray-600 rounded px-4 pb-2 pt-5">
<img class="rounded-md" src="https://moviestack.onrender.com/static/vlzyyn9td8.jpg" alt="image">
<h2 class="text-center font-bold">Sound of Freedom </h2>
<h3 class="text-center font-semibold">Fight for the light. Silence the darkness.</h3>
<p>The story of Tim Ballard, a former US government agent,
 who quits his job in order to devote his life to rescuing children from global sex traffickers.</p>
</article>*/
const contenedor= document.getElementById ("contenedor")
console.log(movies.data);
contenedor.innerHTML+= createTemplate(movies)
function createTemplate(listMovie) {
   let template= ""
   for (const movie of listMovie) {
    template += crearCard(movie)
   } 
   return template
}
function crearCard (movie) {
    return `<article class=" flex-wrap w-[350px] flex flex-col justify-center items-center gap-3 bg-gray-600 rounded px-4 pb-2 pt-5">
    <img class="rounded-md" src="${movie.image}" alt="image">
    <h2 class="text-center font-bold">${movie.title} </h2>
    <h3 class="text-center font-semibold">${movie.tagline}</h3>
    <p>${movie.overview}</p>
    <a class=" border bg-slate-800 font-semibold text-white p-3 w-2/3 text-center" href="./detalles.html?id=${movie.id}">see more information</a>
    </article>`
}
const inputBusqueda= document.getElementById("inputBusqueda")
const checkboxContenedor= document.getElementById("checkboxes")
let generos = movies.map(movie => (movie.genres)).flat()
let listaDeGeneros = new Set(generos)
console.log(generos)
console.log(listaDeGeneros);
function crearOpciones(generos,contenedor) {
    let opciones =""
    for (const genero of generos) {
    opciones += crearGeneros (genero)
contenedor.innerHTML= opciones
}}
function crearGeneros(genero) {
    return`<option value="${genero}">${genero}</option>`
}
crearOpciones(listaDeGeneros,checkboxContenedor)
inputBusqueda.addEventListener("keyup", () =>{
 const filtradoPorTitulo= filtrarPorTitulo(movies, inputBusqueda.value)
 cardFiltrada(filtradoPorTitulo,contenedor,crearCard)
})
function filtrarPorTitulo(listMovie,title) {
    const filtro= listMovie.filter( movie => movie.title.toLowerCase().startsWith(title.toLowerCase()))
    return filtro
}
function cardFiltrada(lista, donde,fn) {
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
checkboxes.addEventListener('change', () => {
    const filtradoporgenero = filtrarporgenero(movies,checkboxes.value)
    const filtradoPorTitulo=filtrarPorTitulo( filtradoporgenero ,inputBusqueda.value)
    cardFiltrada(filtradoPorTitulo, contenedor, crearCard)
   
   })
   
   function filtrarporgenero(movies, genero) {
     const filtro = movies.filter(movie => movie.genres.indexOf(genero)!=-1)
     return filtro
   }