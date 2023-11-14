const search= location.search
const params= new URLSearchParams(search)
const id= (params.get("id"))
const movie = movies.find(movie => movie.id == params.get("id"))