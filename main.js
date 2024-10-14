// Selección de mascota
/** Función para manejar la selección de la mascota del jugador. Muestra una alerta indicando que la mascota ha sido seleccionada.*/
function seleccionarMascotajugador() {
    let seleccionarMokepon = document.getElementById('selecionar-mascota');
    let mascotaElegida = seleccionarMokepon.value;

    if(mascotaElegida === 'Mudhorn'){
        alert('Has seleccionado a Mudhorn🐂⛰');
    } else if(mascotaElegida === 'Terraclaw') {
        alert('Has seleccionado a Terraclaw🦅⛰');
    } else if (mascotaElegida === 'Tidelfin') {
        alert('Has seleccionado a Tidelfin🐬💧');
    } else if(mascotaElegida === 'Hydroscale') {
        alert('Has seleccionado a Hydroscale🐉💧');
    } else if(mascotaElegida === 'Pyroclaw') {
        alert('Has seleccionado a Pyroclaw🦀🔥');
    } else if(mascotaElegida === 'Blazetail') {
        alert('Has seleccionado a Blazetail🦊🔥');
    }  else if (mascotaElegida === 'Steamdrake') {
        alert('Has seleccionado a Steamdrake 🐉💧🔥');
    } else if (mascotaElegida === 'Flarestorm') {
        alert('Has seleccionado a Flarestorm 🌪🔥⛰');
    } else if (mascotaElegida === 'Terratide') {
        alert('Has seleccionado a Terratide 🐢⛰💧');
    } 
}
window.addEventListener('load', iniciarJuego)