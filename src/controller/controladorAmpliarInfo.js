
let DatoPe=JSON.parse(localStorage.getItem("peliculaSeleccionada"))
console.log(DatoPe)

let poster=DatoPe.poster
let nombre=DatoPe.titulo
let sinopsis=DatoPe.sinopsis
let genero=DatoPe.genero
let idioma=DatoPe.idioma
let director=DatoPe.director
let actor = DatoPe.actor

let foto=document.getElementById("foto")
foto.src=poster

let titulo=document.getElementById("titulo")
titulo.textContent=nombre

let sinopsiss=document.getElementById("sinopsiss")
sinopsiss.textContent=sinopsis

let gen = document.getElementById("genero")
gen.textContent=genero

let idi = document.getElementById("idioma")
idi.textContent=idioma

                    