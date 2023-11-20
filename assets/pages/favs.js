import{filtrarPorTitulo,filtrarporgenero,crearCard,cardFiltrada,createTemplate,} from '../module/funciones.js'
const contenedorFavs= document.getElementById("contenedorFavs")
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
const recuLocalStorage=JSON.parse(localStorage.getItem("like"))
const favorite = movies.filter(movie => recuLocalStorage.some(favs=>favs.id===movie.id))
console.log(favorite);
contenedorFavs.innerHTML+= createTemplate(favorite)
})