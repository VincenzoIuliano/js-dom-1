const button = document.querySelector('button');

// SOLUZIONE CON ETICHETTA DEL BUTTON COME CONDIZIONE IF

// button.addEventListener("click", function () {
//     if (button.textContent==='Accendi') {
//         lamp.src = "./img/yellow_lamp.png";
//         button.textContent = 'Spegni'
//         console.log('acceso')
//     } else if (button.textContent==='Spegni') {
//         lamp.src="./img/white_lamp.png"
//         button.textContent='Accendi'
//         console.log('spento')
//     }
// });


const image = document.querySelector('img');

// SOLUZIONE CON NOME CLASSE DELL'IMMAGINE COME CONDIZONE IF 

button.addEventListener("click", function () {
    if (image.className ==='lampOff') {
        lamp.src = "./img/yellow_lamp.png";
        button.textContent = 'Spegni';
        image.classList.replace("lampOff", "lampOn");
        console.log('acceso');
    } else if (image.className ==='lampOn') {
        lamp.src="./img/white_lamp.png";
        button.textContent='Accendi';
        image.classList.replace("lampOn", "lampOff");
        console.log('spento');
    }
});