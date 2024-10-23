let ataqueJugador        // Variable para almacenar el ataque del jugador
let ataqueRival         // Variable para almacenar el ataque del rival
let vidasJugador = 3    // Variable para almacenar las vidas del jugador
let vidasRival =  3     // Variable para almacenar las vidas del rival

// Función que inicializa el juego
function iniciarJuego() {  
    let sectionSelecionarAtaque = document.getElementById('seleccion-ataque');  // Obtiene el elemento section de selección de ataque
    sectionSelecionarAtaque.style.display = 'none';  // Oculta el elemento section de selección de ataque
    
    // Obtiene el botón de selección de mascota y añade un event listener
    let botonMascotajugador = document.getElementById('boton-mascota');   // Obtiene el botón de selección de mascota
    botonMascotajugador.addEventListener('click', seleccionarMascotajugador); // Añade un event listener al botón de selección de mascota

    // Obtiene los botones de ataque Fuego, Agua, Tierra y añade un event listener a cada uno

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);

    // Obtiene el botón de reiniciar juego y añade un event listener
    let botonReiniciar = document.getElementById('Reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
}

// Funcion para seleccionar la mascota del jugador
function seleccionarMascotajugador() {
    let sectionseleccionarAtaque = document.getElementById('seleccion-ataque');  // Obtiene el elemento section de selección de ataque
    sectionseleccionarAtaque.style.display = 'block';  // Muestra el elemento section de selección de ataque

    let selectElement = document.getElementById('selecionar-mascota');  // Obtiene el elemento select de mascotas
    let selectedPokemon = selectElement.value;  // Obtiene el valor seleccionado en el select.

    let spanMascotaJugador = document.getElementById('mascota-jugador'); // Obtiene el elemento span para mostrar la mascota del jugador

    // Dependiendo de la mascota seleccionada, se muestra el nombre de la mascota en el span
    
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
    } else { // Si no se selecciona ninguna mascota, se muestra un mensaje en la consola
        console.log('No has seleccionado ninguna mascota');
    }

    seleccionarMascotaRival();  // Llama a la función para seleccionar una mascota rival
}

function seleccionarMascotaRival() {  // Función para seleccionar una mascota rival de manera aleatoria
    let mascotaRivalAleatorio = aleatorio(1, 9);  // Genera un número aleatorio entre 1 y 9
    let spanMascotaRival = document.getElementById('mascota-rival'); // Obtiene el elemento span para mostrar la mascota rival

    // Dependiendo del número aleatorio, se muestra el nombre de la mascota rival en el span

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

// Funciones para los ataques del jugador. Cada función asigna un valor a la variable ataqueJugador y llama a la función ataqueAleatorioEnemigo

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

// Función para el ataque aleatorio del rival

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3); // Genera un número aleatorio entre 1 y 3

    // Dependiendo del número aleatorio, se asigna un ataque al rival

    if (ataqueAleatorio == 1) {
        ataqueRival = 'Fuego';
    } else if (ataqueAleatorio == 2) {
        ataqueRival = 'Agua';
    } else if (ataqueAleatorio == 3) {
        ataqueRival = 'Tierra';
    }

    crearMensaje(); // Llama a la función para crear el mensaje con el resultado del ataque
}

// Función para determinar el resultado del ataque

function determinarResultado(){
// Si el ataque del jugador es igual al ataque del rival, se muestra un mensaje de empate, de lo contrario, se determina el ganador
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

// Función para contar las vidas del jugador y del rival
function contadorVidas(resultado) {
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasRival = document.getElementById('vidas-rival');

    if (resultado === ' Perdiste ') {
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    } else if (resultado === ' Ganaste ') {
        vidasRival--;
        spanVidasRival.innerHTML = vidasRival;
    }
      // Si el jugador o rival se queda sin vidas, mostramos un mensaje
    if (vidasJugador === 0) {
        alert('¡Has perdido el juego!');
        reiniciarJuego();
    } else if (vidasRival === 0) {
        alert('¡Has ganado el juego!');
        reiniciarJuego();
    }
}

// Función para crear el mensaje con el resultado del ataque
function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    let resultado = determinarResultado();

// Se muestra el mensaje con el resultado del ataque, mencionando el ataque del jugador, el ataque del rival y el resultado del ataque
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' y la mascota del rival atacó con ' + ataqueRival +  resultado;

    sectionMensajes.appendChild(parrafo);
    contadorVidas(resultado);
}


// Función para reiniciar el juego
function reiniciarJuego() {
    location.reload();
}
// Función para generar un número aleatorio entre un rango de números
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('load', iniciarJuego);