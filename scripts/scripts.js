import { animais } from '../dados/dados-animais.js';

document.addEventListener('DOMContentLoaded', function() {
    rederizaranimal(animais);

})

function rederizaranimal(animais) {
    const grid = document.getElementById('animais')
    if (animais.lenght === 0) {
        grid.innerHTML = '<p>Animal não encontrado</p>'
    }

    grid.innerHTML = animais.map(cardanimal).join('');
}

function cardanimal(animais){
    return`
        <div class="cardsanimal">
            <img src="${animais.fotos[0]}" alt="${animais.nome}">
            <h3>${animais.nome}</h3>
            <p>${animais.especie}</p>
            <a href="./pages/perfil-animal.html?id=${animais.id}">
                <button>QUERO ADOTAR</button>
            </a>
        </div>
    `
}