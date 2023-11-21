import{filtrarPorTitulo,filtrarporgenero,crearCard,cardFiltrada,createTemplate,crearOpciones,filtroCruzado} from '../module/funciones.js'
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
   filtroCruzado(inputBusqueda,checkboxes,movies,contenedor)
})
inputBusqueda.addEventListener("keyup", () =>{
    filtroCruzado(inputBusqueda,checkboxes,movies,contenedor)
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
*/