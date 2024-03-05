//DECLARANDO VARIBLES CON JS DESDE EL DOM

let usuarioBaseDatos= "sura16"
let passwordBaseDatos= "12345"
let correobaseDatos= "sura@gmail.com"

let botonFormulario=document.getElementById("botonIngreso")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormularioEmail=document.getElementById("email")
let cajaFormularioPassword=document.getElementById("password")

//DETECTANDO EVENTOS CON JS
botonFormulario.addEventListener("click",function(evento){

    evento.preventDefault()
    
    //1.capturamos la informacion del formulario
    let nombreUsuario=cajaFormularioNombre.value
    let correoUsuario=cajaFormularioEmail.value
    let passwordUsuario=cajaFormularioPassword.value

    //validando los datos del usuario
    if(usuarioBaseDatos==nombreUsuario && passwordBaseDatos==passwordUsuario && correobaseDatos==correoUsuario){
        Swal.fire({
            title: "Bienvenido "+nombreUsuario,
            text: "Tus credenciales son correctas",
            icon: "success"
          })
          
          setTimeout(function(){
            sessionStorage.setItem("nombre",nombreUsuario)
            window.location.href="./src/views/home.html"
          },3000)
          



    }else{
        Swal.fire({
            icon: "error",
            title: "Oops..."+ nombreUsuario+" tienes un problema",
            text: "Verifica tus credenciales",

          });

    }

    


})

/*cajaFormularioNombre.addEventListener("click",function(){
    alert("Digite su nombre")
})
cajaFormularioEmail.addEventListener("click",function(){
    alert("Digite su correo")
})
cajaFormularioPassword.addEventListener("click",function(){
    alert("Digite su contraseña")
})*/

