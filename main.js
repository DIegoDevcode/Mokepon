


function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)
}

function selecionarMascotaJugador(){
    if(document.getElementById("Hipodoge").checked) {
        alert('Selecionaste a hipodoge')
    } else if (document.getElementById("Capipepo").checked) {
        alert('Selecionaste a capipepo') 
    } else if (document.getElementById("Ratigueya").checked) {
        alert('Selecionaste a Ratigueya') 
    } else {
        alert("No seleccionaste ninguna mascota")
    }
}

window.addEventListener('load', iniciarJuego)

