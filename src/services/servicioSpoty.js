const URI="https://api.spotify.com/v1/albums/4AAPezFbgrWBlksq3glToV/tracks?market=US&limit=10&offset=5"
const TOKEN="Bearer BQDCvq9E_EbrLzueA8HUy4Xs5XzT4Y9lyUbvOyIbqu74yb0avuLkG7U7c15Ey3oIFliei2nveWBdqHhHM7xbJ0mVf5etxNCx5xUbkTD8UdZJMAdwUCa3vwTyJlXyOPl8S1ikMBzvbpwJ5STCMs0BBF90IXhhW2ilzr66kgGeEPrQ6oCUaOHEiZgW7rJC8oyn3YI"


const PETICION ={
    method:"GET",
    headers:{Authorization:TOKEN}

}

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    let canciones=(respuesta.items)
    canciones.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
    })
})
.catch(function(error){
    console.log(error)
})