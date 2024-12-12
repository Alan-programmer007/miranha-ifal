const miranha = document.querySelector('.miranha');
const caixote = document.querySelector('.caixote');
const nave = document.querySelector('.nave');
const placa = document.querySelector('.placa');
const terra = document.querySelector('.terra');
const score = document.querySelector('.score');
const bnt = document.querySelector("#reiniciar")
let count = 0;

const pulo = () => {
    miranha.classList.add('pulo');

    setTimeout(() => {

        miranha.classList.remove('pulo'); 

    }, 500);
}

const loop = setInterval(() => {

    const caixotePosition = caixote.offsetLeft;
    const navePosition = nave.offsetLeft;
    const placaPosition = placa.offsetLeft;
    const terraPosition = terra.offsetLeft;
    const miranhaPosition = +window.getComputedStyle(miranha).bottom.replace('px', '');   
    
    if (caixotePosition <= 102 && caixotePosition > 0 && miranhaPosition < 80) {

        caixote.style.animation = "none";
        caixote.style.left = `${caixotePosition}px`;

        nave.style.animation = "none";
        nave.style.left = `${navePosition}px`;

        placa.style.animation = "none";
        placa.style.left = `${placaPosition}px`;

        terra.style.animation = "none";
        terra.style.left = `${terraPosition}px`;

        miranha.style.animation = "none";
        miranha.style.bottom = `${miranhaPosition}px`;

        miranha.src="./images/game-over.png";
        miranha.style.width = '140px';
        miranha.style.margiLeft = '50px';

        clearInterval(loop);
    }

        count++;
        score.innerHTML = `SCORE: ${count}`;

}, 20);


document.addEventListener('keydown', pulo);

bnt.addEventListener("click", () =>{
    location.reload()
})

