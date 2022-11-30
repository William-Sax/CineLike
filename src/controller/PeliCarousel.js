import {proximamente} from "../helper/baseDatos2.js"
let fila=document.getElementById("fila2")
proximamente.forEach(function (prox) {
    console.log(prox.nombre)
    console.log(prox.poster)

    let columna2 = document.createElement("div")
    columna2.classList.add("col")
    
    let tarjeta2 = document.createElement("div")
    tarjeta2.classList.add("card")
    //Imagenes de las peliculas de la cartelera
    let poster=document.createElement("img")
    poster.classList.add("card")
    poster.src=prox.poster
  
    tarjeta2.appendChild(poster)

    columna2.appendChild(tarjeta2)
    fila2.appendChild(columna2)

});