let ataqueJugador 
let ataqueEnemigo

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
    let mascotaAleatorio = aleatorio(1,3)
    let spanmascotaPc = document.getElementById('mascota-enemigo')

    if(mascotaAleatorio == 1 ){
        spanmascotaPc.innerHTML = 'Hipodoge'
    } else if(mascotaAleatorio == 2){
        spanmascotaPc.innerHTML = 'Capipepo'
    } else{
        spanmascotaPc.innerHTML ='Ratigueya';
    }
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1 ){
        ataqueEnemigo = 'Fuego'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua'
    } else{
        ataqueEnemigo = 'Tierra'
    }
    combate()
}

//    if(ataqueEnemigo == ataqueJugador) {
    //       crearMensaje("EMPATE")
    //   } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        //      crearMensaje("Ganaste")
        //      if(ataqueEnemigo == 'AGUA')
        //       crearMensaje("Perdiste")
  //   } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
  //       crearMensaje("Ganaste")
  //       if(ataqueEnemigo == 'TIERRA')
  //      crearMensaje("Perdiste")
  //   } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
      //       crearMensaje("Ganaste")
      //   } else {
          //       crearMensaje("Perdiste")
          //   }
function combate() {
    if (ataqueEnemigo == ataqueJugador){
        crearMensaje('Empataste!')
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje('Ganaste')
        if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Agua')
        crearMensaje('Perdiste')
    } 
//     print('paper beats rock')
//     print('computer win')
// elif user_option == 'paper':
//   if computer_option == 'rock':
//     print('paper beats rock')
//     print('Won')
//   else:
//     print('scissors beats paper')
//     print('computer win')
// elif user_option ==  'scissors':
//   if computer_option == 'paper':
//     print('scissors beats paper')
//     print("won")
//   else:
//     print("rock beats scissors")
//     print("computer win")
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', las mascota del enemigo atacó con ' + ataqueEnemigo + '' + resultado

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max-min + 1)+ min)
}
window.addEventListener('load', iniciarJuego)

