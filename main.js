function iniciarJuego() {
    let botónMascotaJugador = document.getElementById('boton-mascota')
    botónMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
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
}

window.addEventListener('load', iniciarJuego)

