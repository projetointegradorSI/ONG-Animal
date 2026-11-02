import { animais } from '../dados/dados-animais.js';


document.addEventListener('DOMContentLoaded', () => {
    renderizaranimal(animais)

    document.getElementById('btn-busca').addEventListener("click", pesquisar)

    document.getElementById('input-pesquisa').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            pesquisar()
        }
    })
})


function renderizaranimal(animais) {
    const grid = document.getElementById('animais')
    if (animais.length > 0) {
        grid.innerHTML = animais.map(cardsanimal).join('');
    } else {
        grid.innerHTML = '<p>Nenhum animal encontrado.</p>';
    }
}


function cardsanimal(animal) {
    return `
        <div class="cardsanimal">
            <img src="${animal.fotos[0]}" alt="${animal.nome}">
            <h3>${animal.nome}</h3>
            <p>${animal.especie} · ${animal.idade}</p>
            <a href="./perfil-animal.html?id=${animal.id}">
                <button>QUERO ADOTAR</button>
            </a>
        </div>
    `;
}


