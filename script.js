const button = document.querySelector('button');
const lampOff = document.getElementById("lampOff")

button.addEventListener("click", turnLampOn);
// button.addEventListener("click", turnLampOff);

function turnLampOn() {
    lamp.src="./img/yellow_lamp.png";
    button.textContent='Spegni'
}

// button.addEventListener("click", turnLampOff);

// function turnLampOff() {
//     lamp.src="./img/white_lamp.png"
//     button.textContent='Accendi'
// }