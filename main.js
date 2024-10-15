/** Inicializa el juego configurando los event listeners. Específicamente, añade un event listener de clic al botón con el ID 'boton-mascota', que desencadena la función para seleccionar la mascota del jugador.
 */
// seccion Iniciar Juego
function iniciarJuego(){
    let botonMascotajugador = document.getElementById('boton-mascota');
    botonMascotajugador.addEventListener('click', seleccionarMascotajugador); 
}

// Selección de mascota
/** Función para manejar la selección de la mascota del jugador. Muestra una alerta indicando que la mascota ha sido seleccionada.*/
function seleccionarMascotajugador() {
    let seleccionarMokepon = document.getElementById('selecionar-mascota');
    let mascotaElegida = seleccionarMokepon.value;
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    if(mascotaElegida === 'Mudhorn'){
        spanMascotaJugador.innerHTML = 'Mudhorn';
    } else if(mascotaElegida === 'Terraclaw') {
        spanMascotaJugador.innerHTML = 'Terraclaw';
    } else if (mascotaElegida === 'Tidelfin') {
        spanMascotaJugador.innerHTML = 'Tidelfin';
    } else if(mascotaElegida === 'Hydroscale') {
        spanMascotaJugador.innerHTML = 'Hydroscale';
    } else if(mascotaElegida === 'Pyroclaw') {
        spanMascotaJugador.innerHTML = 'Pyroclaw';
    } else if(mascotaElegida === 'Blazetail') {
        spanMascotaJugador.innerHTML = 'Blazetail';
    }  else if (mascotaElegida === 'Steamdrake') {
        spanMascotaJugador.innerHTML = 'Steamdrake';
    } else if (mascotaElegida === 'Flarestorm') {
        spanMascotaJugador.innerHTML = 'Flarestorm';
    } else if (mascotaElegida === 'Terratide') {
        spanMascotaJugador.innerHTML = 'Terratide';
    } 

    seleccionarMascotaRival();
}

function seleccionarMascotaRival() {
    let ataqueRivalAleatorio = aleatorio(1, 9);
    let spanMascotaRival = document.getElementById('mascota-rival');


    if(ataqueRivalAleatorio == 1){
        spanMascotaRival.innerHTML = 'Mudhorn';
    } else if(ataqueRivalAleatorio == 2){
        spanMascotaRival.innerHTML = 'Terraclaw';
    } else if(ataqueRivalAleatorio == 3){
        spanMascotaRival.innerHTML = 'Tidelfin';
    } else if(ataqueRivalAleatorio == 4){
        spanMascotaRival.innerHTML = 'Hydroscale';
    } else if(ataqueRivalAleatorio == 5){
        spanMascotaRival.innerHTML = 'Pyroclaw';
    } else if (ataqueRivalAleatorio == 6){
        spanMascotaRival.innerHTML = 'Blazetail';
    } else if (ataqueRivalAleatorio == 7){
        spanMascotaRival.innerHTML = 'Steamdrake';
    } else if (ataqueRivalAleatorio == 8){
        spanMascotaRival.innerHTML = 'Flarestorm';
    } else if (ataqueRivalAleatorio == 9){
        spanMascotaRival.innerHTML = 'Terratide';
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('load', iniciarJuego)