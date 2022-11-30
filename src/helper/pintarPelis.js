export function pintarPelis(cartelera){
    let fila=document.getElementById("fila")
    cartelera.forEach(function (pelicula) {
        
    
        let columna = document.createElement("div")
        columna.classList.add("col")
        
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","h-100")
        //Imagenes de las peliculas de la cartelera
        let poster=document.createElement("img")
        poster.classList.add("card-title", "text-center")
        poster.src=pelicula.poster
        //Titulo
        let titulo=document.createElement("h3")
        titulo.classList.add("card-img-top")
        titulo.textContent=pelicula.nombre
        //Genero
        let gen = document.createElement("h4")
        gen.classList.add("text-start")
        gen.textContent="Genero: "+ pelicula.genero
        //Iidioma
        let idioma = document.createElement("h6")
        idioma.classList.add("fw-bold")
        idioma.textContent="Idioma:"+pelicula.idioma
        //Sipnosis
        let sip = document.createElement("p")
        sip.classList.add("d-none")
        sip.textContent="Sipnosis: "+pelicula.sinopsis
        //Director
        let direc = document.createElement("p")
        direc.classList.add("text-start")
        direc.textContent = "Director: " + pelicula.director
        //Actor
        let actor = document.createElement("p")
        actor.classList.add("text-start")
        actor.textContent = "Actores: " + pelicula.actor

        let duracion = document.createElement("p")
        duracion.classList.add("text-start")
        duracion.textContent = "Duracion: " +pelicula.duracion
    
    
        
        tarjeta.appendChild(poster)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(sip)
        tarjeta.appendChild(gen)
        tarjeta.appendChild(idioma)
        tarjeta.appendChild(direc)
        tarjeta.appendChild(actor)
        tarjeta.appendChild(duracion)
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    });
}