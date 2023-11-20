import{filtrarPorTitulo,filtrarporgenero,crearCard,cardFiltrada,createTemplate,crearOpciones} from '../module/funciones.js'
const contenedor= document.getElementById ("contenedor")
const inputBusqueda= document.getElementById("inputBusqueda")
const checkboxContenedor= document.getElementById("checkboxes")
const opcionesApi={
    headers:{
        "x-api-key":'0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
}
fetch('https://moviestack.onrender.com/api/movies',opcionesApi)
.then(Response=> Response.json())
.then(data=>{
    const movies= data.movies
console.log(data.movies)
contenedor.innerHTML+= createTemplate(movies)
let generos = movies.map(movie => (movie.genres)).flat()
let listaDeGeneros = new Set(generos)
console.log(listaDeGeneros);
crearOpciones(listaDeGeneros,checkboxContenedor)
checkboxes.addEventListener('change', () => {
    const filtradoporgenero = filtrarporgenero(movies,checkboxes.value)
    const filtradoPorTitulo=filtrarPorTitulo( filtradoporgenero ,inputBusqueda.value)
    cardFiltrada(filtradoPorTitulo, contenedor, crearCard)
})
inputBusqueda.addEventListener("keyup", () =>{
 const filtradoPorTitulo= filtrarPorTitulo(movies, inputBusqueda.value)
 cardFiltrada(filtradoPorTitulo,contenedor,crearCard)
})
 const buttonFavs= document.querySelectorAll(".buttonFavs")
const articleFavs=document.querySelectorAll(".articleFavs")
const imageFavs=document.querySelectorAll(".imageFavs")
buttonFavs.forEach((button, index) => {
    let contStorage= JSON.parse(localStorage.getItem("like")) || []
    button.addEventListener('click', () => {
    contStorage=JSON.parse(localStorage.getItem("like")) || []
    const contenedorId = articleFavs[index].dataset.id;
    const comprobarLocalStorag= contStorage.some(item=> item.id===contenedorId)
        console.log(contenedorId);
        const imgFavs= imageFavs[index].dataset.id;
        if (!comprobarLocalStorag) {
            imageFavs[index].src="../Recursos Moviestack/like-rojo.png"
            contStorage.push({id: contenedorId})
            console.log(contStorage);
         }
         else{
            if (comprobarLocalStorag) {
             contStorage=contStorage.filter(item=>item.id !==contenedorId)  
             imageFavs[index].src="../Recursos Moviestack/like_vacio.png"
            }
         }
         localStorage.setItem("like", JSON.stringify(contStorage))
    });
});
})



/*let num=[1,2,3,4,5,6,7,8,9,10]
let resultado = num.map((pepe)=>pepe*2)
console.log(num.map((pepe)=>pepe*2));
SEGUNDA PARTE
1-crear el html y el js para Favs
2-agregar un boton de favs a cada card
3-agregar un conjunto de datos con la informacion de cada pelicula al boton
4-agregar un detector de ventos al elemento contenedor de todas las tarjetas 
y desarrollar la logica para su funcionalidad
5-guardar lista de favs en el almacenamiento local
6-carga la lista de favs del almacenamiento local cuando se cargue la pag
TERCERA PARTE
1- enviar proyecto a la rama sprint-3 en github
2-enviar sprint con el elance de mi repositorio
EXTRAS
-mejorar los estilos y diseño de la pagina
-hacerla responsive
-crear un boton para limpiar toda busueda o la opcion de all

*/