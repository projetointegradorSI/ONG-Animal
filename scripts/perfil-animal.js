import { animais } from '../dados/dados-animais.js';

const shareButton = document.getElementById('share-button');
shareButton.addEventListener('click', async () => {
    const shareData = { title: document.title, text: 'Conheça este animal disponível para adoção!', url: window.location.href };
    try {
        if (navigator.share) await navigator.share(shareData);
        else if (navigator.clipboard) {
            await navigator.clipboard.writeText(window.location.href);
            shareButton.textContent = 'Link copiado!';
            setTimeout(() => shareButton.textContent = 'Compartilhar', 2000);
        } else {
            window.prompt('Copie o link desta página:', window.location.href);
        }
    } catch (error) {
        if (error.name !== 'AbortError') window.prompt('Copie o link desta página:', window.location.href);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id'));
    const animal = animais.find(a => a.id === id);

    if (!animal) {
        document.querySelector('main').innerHTML = '<p>Animal não encontrado.</p>';
        return;
    }

    rederizar(animal);
});

function rederizar(animal) {

    
    document.getElementById('animal-name').textContent = animal.nome;
    document.title = animal.nome + ' · Adoção Lins';

  
    document.querySelector('.pill-sexo').textContent = animal.sexo;
    document.querySelector('.pill-idade').textContent = animal.idade;
    document.querySelector('.pill-porte').textContent = animal.porte;

  
    document.querySelector('.main-photo img').src = animal.fotos[0];
    document.querySelector('.main-photo img').alt = animal.nome;

   
    const thumbsContainer = document.querySelector('.thumbnails');

    thumbsContainer.innerHTML = '';

    for (let i = 0; i < animal.fotos.length; i++) {
        const foto = animal.fotos[i];

        thumbsContainer.innerHTML +=
            '<div class="thumb" data-index="' + i + '">' +
                '<img src="' + foto + '" alt="Foto ' + (i + 1) + ' de ' + animal.nome + '">' +
            '</div>';
    }

   
    const miniaturas = thumbsContainer.querySelectorAll('.thumb');

    for (let i = 0; i < miniaturas.length; i++) {
        miniaturas[i].addEventListener('click', function () {

            const indice = Number(this.dataset.index);

            document.querySelector('.main-photo img').src = animal.fotos[indice];

        });
    }

  
    document.querySelector('.detail-porte .value').textContent = animal.porte;
    document.querySelector('.detail-idade .value').textContent = animal.idade;
    document.querySelector('.detail-sexo .value').textContent = animal.sexo;

    if (animal.castrado == true) {
        document.querySelector('.detail-castrado .value').textContent = 'Sim';
    } else {
        document.querySelector('.detail-castrado .value').textContent = 'Não';
    }

    
    document.querySelector('.description p').textContent = animal.descricao;

    
    const galeriaGrid = document.querySelector('.gallery-grid');

    galeriaGrid.innerHTML = '';

    for (let i = 0; i < animal.fotos.length; i++) {
        const foto = animal.fotos[i];

        galeriaGrid.innerHTML +=
            '<div class="gallery-photo">' +
                '<img src="' + foto + '" alt="Foto da galeria ' + (i + 1) + '">' +
            '</div>';
    }
}