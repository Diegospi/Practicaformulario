//Para donde vas
let URI="https://accounts.spotify.com/api/token"

//Que vas hacer?
let grant_type="grant_type=client_credentials"
let client_id="client_id=41972b1dc2444102b9995b150f4d531c"
let client_secret="client_secret=f02f92990a01442684ba64cc87602a28"
let peticion={
    method: "POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    }
}