//Consumiendo apis con JS

//1. Pa donde vas(Almaceno en una variable la URI del servicio)
let URI="https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US"

//2. Que vas hacer? (metodo HTTP)
let metodo="GET"

//3. Tenes permiso? (Configurar peticiones)
let token="Bearer BQAtWUmBVqU67-BWsuxUV3rHJzRFjXy7BH4eKma4p2hydzBDne9MyXrTpQ2NnBB0Pmhz4OXmN5psbQwXIMJfYM11NR-w_D4flybibLylsNaCDhHEG5U"

let peticion={
    method:metodo,
    headers:{
        "Autorization":token
    }
}

//4. Vaya pues traigame cositas (Promesa)
fetch(URI,peticion)
.then(function(respuestaServidor){
    return respuestaServidor.json()
}) //linea para indicar que hago si todo esta bien
.then(function(respuestaJson){
    console.log(respuestaJson)
})
.catch(function(respuestaError){
    console.log(respuestaError)
})//linea para indicar que hago si algo fallo
