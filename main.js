let ataqueJugador 

function iniciarJuego() {
    let botónMascotaJugador = document.getElementById('boton-mascota')
    botónMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let spanmascotajugador = document.getElementById("mascota-jugador")

    if( inputHipodoge.checked) {
        spanmascotajugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanmascotajugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanmascotajugador.innerHTML = "Ratigueya"
    } else {
        alert("No seleccionaste ninguna mascota")
    }
    seleccionarMascotaPc()
}
function seleccionarMascotaPc(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanmascotaPc = document.getElementById('mascota-enemigo')

    if(ataqueAleatorio == 1 ){
        spanmascotaPc.innerHTML = 'Hipodoge'
    } else if(ataqueAleatorio == 2){
        spanmascotaPc.innerHTML = 'Capipepo'
    } else{
        spanmascotaPc.innerHTML ='Ratigueya';
    }
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
    alert(ataqueJugador)
}

function ataqueAgua(){
    ataqueJugador = 'Agua'
    alert(ataqueJugador)
}

function ataqueTierra(){
    ataqueJugador = 'Tierra'
    alert(ataqueJugador)
}

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max-min + 1)+ min)
}
window.addEventListener('load', iniciarJuego)

