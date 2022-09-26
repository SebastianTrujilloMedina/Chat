//////////////////////////Validacion de formulario de registro////////////////////////////////////

const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <4){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true

    }
    if(pass.value.length < 8){
    warnings += `La contarseña debe contener minimo 8 caracteres <br>`
    entrar = true

    }

    if(entrar){
        parrafo.innerHTML = warnings

        
    }

})


/////////////////////////////Validacion de formulario iniciar sesion//////////////////////////


const email1 = document.getElementById("email")
const pass1 = document.getElementById("password")
const form1 = document.getElementById("form")
const parrafo1 = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
   
    if(!regexEmail.test(email1.value)){
        warnings += `El email no es valido <br>`
        entrar = true

    }
    if(pass.value.length < 8){
    warnings += `La contarseña debe contener minimo 8 caracteres <br>`
    entrar = true

    }

    if(entrar){
        parrafo1.innerHTML = warnings

        
    }

})