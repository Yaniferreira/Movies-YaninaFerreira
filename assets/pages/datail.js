const search= location.search
const params= new URLSearchParams(search)
const id= (params.get("id"))
const movie = movies.find(movie => movie.id == params.get("id"))
console.log(movie.title);
contenedorDatails.innerHTML = creardatails (movie)
function creardatails (movie) {
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