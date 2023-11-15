import {creardatails} from'../module/funciones.js'
const search= location.search
const params= new URLSearchParams(search)
const id= (params.get("id"))
const movie = movies.find(movie => movie.id == params.get("id"))
console.log(movie.title);
contenedorDatails.innerHTML = creardatails (movie)
