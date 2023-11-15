import{createTemplate,crearOpciones,filtrarPorTitulo,filtrarporgenero,crearCard,cardFiltrada,} from '../module/funciones.js'
const contenedor= document.getElementById ("contenedor")
console.log(movies.data);
contenedor.innerHTML+= createTemplate(movies)
const inputBusqueda= document.getElementById("inputBusqueda")
const checkboxContenedor= document.getElementById("checkboxes")
let generos = movies.map(movie => (movie.genres)).flat()
let listaDeGeneros = new Set(generos)
console.log(generos)
console.log(listaDeGeneros);
checkboxes.addEventListener('change', () => {
    const filtradoporgenero = filtrarporgenero(movies,checkboxes.value)
    const filtradoPorTitulo=filtrarPorTitulo( filtradoporgenero ,inputBusqueda.value)
    cardFiltrada(filtradoPorTitulo, contenedor, crearCard)
   
})
crearOpciones(listaDeGeneros,checkboxContenedor)
inputBusqueda.addEventListener("keyup", () =>{
 const filtradoPorTitulo= filtrarPorTitulo(movies, inputBusqueda.value)
 cardFiltrada(filtradoPorTitulo,contenedor,crearCard)
})
