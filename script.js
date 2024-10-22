const button = document.querySelector('button');

button.addEventListener("click", function () {
    if (button.textContent==='Accendi') {
        lamp.src = "./img/yellow_lamp.png";
        button.textContent = 'Spegni'
        console.log('acceso')
    } else if (button.textContent==='Spegni') {
        lamp.src="./img/white_lamp.png"
        button.textContent='Accendi'
        console.log('spento')
    }
});
// button.addEventListener("click", turnLampOff);

// function turnLampOn() {
//     lamp.src="./img/yellow_lamp.png";
//     button.textContent='Spegni'
//     console.log('acceso')
// }

// button.addEventListener("click", turnLampOff);

// function turnLampOff() {
//     lamp.src="./img/white_lamp.png"
//     button.textContent='Accendi'
//     console.log('spento')
// }