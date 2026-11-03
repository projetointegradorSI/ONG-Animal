import { animais } from '../dados/dados-animais.js'

document.addEventListener('DOMContentLoaded', function () {

    const parametro = new URLSearchParams(window.location.search);
    const id = Number(parametro.get('id'));
    let animal = null;

    for (let i = 0; i < animais.length; i++) {
        if (animais[i].id === id) {
            animal = animais[i];
            i = animais.length;
        }
    }
    if (animal === null) {
        document.querySelector('main').innerHTML = '<p>Animal não encontrado.</p>';
    }
    perfil(animal)
});

function perfil(animal) {

    console.log(animal.descricao);
    console.log(animal.fotos);
    console.log(document.querySelector('.gallery-grid'));
    console.log(document.querySelector('.description p'));

    document.getElementById('animal-name').textContent = animal.nome;
    document.title = animal.nome;

    document.querySelector('.pill-sexo').textContent = animal.sexo;
    document.querySelector('.pill-idade').textContent = animal.idade;
    document.querySelector('.pill-porte').textContent = animal.porte;

    document.querySelector('.main-photo img').src = animal.fotos[0];
    document.querySelector('.main-photo img').alt = animal.nome;

    const thumbsContainer = document.querySelector('.thumbnails');

    thumbsContainer.innerHTML = animal.fotos.map(function (foto, i) {
        return `
            <div class="thumb" data-index ="${i}">
                <img src="${foto}" alt="foto ${i + 1}">
            </div>
        `;
    }).join('')

    document.querySelector('.detail-porte .value').textContent = animal.porte;
    document.querySelector('.detail-idade .value').textContent = animal.idade;
    document.querySelector('.detail-sexo .value').textContent = animal.sexo;

    if (animal.castrado === true) {
        document.querySelector('.detail-castrado .value').textContent = 'Sim';
    } else {
        document.querySelector('.detail-castrado .value').textContent = 'Não';
    }
    document.getElementById('descricao').textContent = animal.descricao;

    const galeriaGrid = document.querySelector('.gallery-grid');
    galeriaGrid.innerHTML = animal.fotos.map(function (foto, i) {
        return `
            <div class="gallery-photo">
                <img src="${foto}" alt="foto ${i + 1}">
            </div>
        `;
    }).join('');
}
