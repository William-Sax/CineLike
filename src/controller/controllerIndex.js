import { cartelera } from "../helper/baseDatos.js";

import { pintarPelis } from "../helper/pintarPelis.js";

let fila=document.getElementById("fila")
pintarPelis(cartelera)
//Detectar selleccion de una pelicula
let peliculaSeleccionada={}
fila.addEventListener("click", function(evento){
    peliculaSeleccionada.poster=(evento.target.parentElement.querySelector('img').src)
    peliculaSeleccionada.titulo=(evento.target.parentElement.querySelector('h3').textContent)//Nombre
    peliculaSeleccionada.genero=(evento.target.parentElement.querySelector('h4').textContent)//Genero
    peliculaSeleccionada.idioma=(evento.target.parentElement.querySelector('h6').textContent)//Idioma
    peliculaSeleccionada.sinopsis=(evento.target.parentElement.querySelector('p').textContent)//Sipnosis
    

    localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada))
    window.location.href="../../src/view/ampliarpelis.html"
    
})
