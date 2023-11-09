/*<article class=" w-[350px] flex flex-col gap-3 bg-gray-600 rounded px-4 pb-2 pt-5">
<img class="rounded-md" src="https://moviestack.onrender.com/static/vlzyyn9td8.jpg" alt="image">
<h2 class="text-center font-bold">Sound of Freedom </h2>
<h3 class="text-center font-semibold">Fight for the light. Silence the darkness.</h3>
<p>The story of Tim Ballard, a former US government agent,
 who quits his job in order to devote his life to rescuing children from global sex traffickers.</p>
</article>*/
const contenedor= document.getElementById ("contenedor")
console.log(movies.data);
contenedor.innerHTML+= createTemplate(movies.data)
function createTemplate(listMovie) {
   let template= ""
   for (const movie of movies) {
    template += crearCard(movies)
   } 
   console.log(template)
   return template
}
function crearCard(movies) {
    return `<article class=" w-[350px] flex flex-col gap-3 bg-gray-600 rounded px-4 pb-2 pt-5">
    <img class="rounded-md" src="${movies.image}" alt="image">
    <h2 class="text-center font-bold">${movies.title} </h2>
    <h3 class="text-center font-semibold">${movies.tagline}</h3>
    <p>${movies.overview}</p>
    </article>`
    
}