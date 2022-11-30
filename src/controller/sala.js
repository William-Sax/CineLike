import { silla } from "../helper/silla.js"
let asientos=[
    [{id:"a1",estado:0,precio:5000},{id:"b1",estado:0,precio:5000},{id:"c1",estado:0,precio:5000},{id:"d1",estado:0,precio:5000}],
    [{id:"a2",estado:0,precio:5000},{id:"b2",estado:0,precio:5000},{id:"c2",estado:0,precio:5000},{id:"d2",estado:0,precio:5000}],
    [{id:"a3",estado:0,precio:5000},{id:"b3",estado:0,precio:5000},{id:"c3",estado:0,precio:5000},{id:"d3",estado:0,precio:5000}]
]

let cinema = document.getElementById('salaCinema')
let boton = document.getElementById('boton')
let cs = 0
silla(asientos, cinema)
//Evento de click en la sala
cinema.addEventListener('click', function(evento){
    if(evento.target.tagName=='IMG'){
        let idAsientoSeleccionado=evento.target.id
        asientos.forEach(function(hilera){
            hilera.forEach(function(asiento){
                if(asiento.id == idAsientoSeleccionado){
                    if(asiento.estado==0){
                        asiento.estado=1
                        evento.target.src="../../assets/img/cinema-chair (2).png"
                        cs = cs + asiento.precio
                        console.log(cs)
                        console.log(asiento.id)
                        boton.addEventListener('click',function(){
                            asiento.estado=2
                            evento.target.src="../../assets/img/cinema-red.png"
                            document.getElementById("mostrar").value = parseFloat(cs) 
                        }) 
                    }else if(asiento.estado==1){
                        asiento.estado=0
                        cs = cs - asiento.precio
                        console.log(cs)
                        
                        evento.target.src="../../assets/img/cinema-chair.png"  
                    }   
                }
            })
        })
    }
})