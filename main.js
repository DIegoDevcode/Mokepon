let ataqueJugador 
let ataqueRival

function iniciarJuego() {   
    let botonMascotajugador = document.getElementById('boton-mascota');
    botonMascotajugador.addEventListener('click', seleccionarMascotajugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);
}


function seleccionarMascotajugador() {
    let selectElement = document.getElementById('selecionar-mascota');
    let selectedPokemon = selectElement.value;

    let spanMascotaJugador = document.getElementById('mascota-jugador');
    if (selectedPokemon === 'Mudhorn') {
        spanMascotaJugador.innerHTML = 'Mudhorn';
    } else if (selectedPokemon === 'Terraclaw') {
        spanMascotaJugador.innerHTML = 'Terraclaw';
    } else if (selectedPokemon === 'Tidelfin') {
        spanMascotaJugador.innerHTML = 'Tidelfin';
    } else if (selectedPokemon === 'Hydroscale') {
        spanMascotaJugador.innerHTML = 'Hydroscale';
    } else if (selectedPokemon === 'pyroclaw') {
        spanMascotaJugador.innerHTML = 'pyroclaw';
    } else if (selectedPokemon === 'Blazetail') {
        spanMascotaJugador.innerHTML = 'Blazetail';
    } else if (selectedPokemon === 'Steamdrake') {
        spanMascotaJugador.innerHTML = 'Steamdrake';
    } else if (selectedPokemon === 'Flarestorm') {
        spanMascotaJugador.innerHTML = 'Flarestorm';
    } else if (selectedPokemon === 'Terratide') {
        spanMascotaJugador.innerHTML = 'Terratide';
    } else {
        console.log('No has seleccionado ninguna mascota');
    }

    seleccionarMascotaRival();
}

function seleccionarMascotaRival() {
    let mascotaRivalAleatorio = aleatorio(1, 9);
    let spanMascotaRival = document.getElementById('mascota-rival');

    if (mascotaRivalAleatorio == 1) {
        spanMascotaRival.innerHTML = 'Mudhorn';
    } else if (mascotaRivalAleatorio == 2) {
        spanMascotaRival.innerHTML = 'Terraclaw';
    } else if (mascotaRivalAleatorio == 3) {
        spanMascotaRival.innerHTML = 'Tidelfin';
    } else if (mascotaRivalAleatorio == 4) {
        spanMascotaRival.innerHTML = 'Hydroscale';
    } else if (mascotaRivalAleatorio == 5) {
        spanMascotaRival.innerHTML = 'Pyroclaw';
    } else if (mascotaRivalAleatorio == 6) {
        spanMascotaRival.innerHTML = 'Blazetail';
    } else if (mascotaRivalAleatorio == 7) {
        spanMascotaRival.innerHTML = 'Steamdrake';
    } else if (mascotaRivalAleatorio == 8) {
        spanMascotaRival.innerHTML = 'Flarestorm';
    } else if (mascotaRivalAleatorio == 9) {
        spanMascotaRival.innerHTML = 'Terratide';
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego';
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugador = 'Agua';
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = 'Tierra';
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueRival = 'Fuego';
    } else if (ataqueAleatorio == 2) {
        ataqueRival = 'Agua';
    } else if (ataqueAleatorio == 3) {
        ataqueRival = 'Tierra';
    }

    crearMensaje();
}

function determinarResultado(){
    if(ataqueJugador === ataqueRival){
        return ' Empate ';
    } else if(
        (ataqueJugador === 'Fuego' && ataqueRival === 'Agua') ||
        (ataqueJugador === 'Agua' && ataqueRival === 'Tierra') ||
        (ataqueJugador === 'Tierra' && ataqueRival === 'Fuego')
    ){
        return ' Perdiste ';
    }
    else{
        return ' Ganaste ';
    }
        }


function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    let resultado = determinarResultado();

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' y la mascota del rival atacó con ' + ataqueRival +  resultado;

    sectionMensajes.appendChild(parrafo);
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('load', iniciarJuego);