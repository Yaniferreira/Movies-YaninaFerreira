import {creardatails} from'../module/funciones.js'
const search= location.search
const params= new URLSearchParams(search)
const id= (params.get("id"))
const opcionesApi={
    headers:{
        "x-api-key":'0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
}
fetch('https://moviestack.onrender.com/api/movies',opcionesApi)
.then(Response=> Response.json())
.then(data=>{
    const movies= data.movies
const movie = movies.find(movie => movie.id == id)
const contenedorDatails= document.getElementById("contenedorDatails")
contenedorDatails.innerHTML = creardatails (movie)
})
