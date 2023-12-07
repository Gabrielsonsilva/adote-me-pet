document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.getElementById('cardContainer');
    const cadastroPet = JSON.parse(localStorage.getItem('cadastroPet'));

    if (cadastroPet) {
        criarNovoCard(cadastroPet);
    }
});

function criarNovoCard(respostas) {
    const cardContainer = document.getElementById('cardContainer');

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = respostas.imagem;
    img.alt = respostas.nome;

    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';

    const nomePet = document.createElement('h3');
    nomePet.textContent = respostas.nome;

    const especie = document.createElement('p');
    especie.textContent = `Espécie: ${respostas.especie}`;

    const raca = document.createElement('p');
    raca.textContent = `Raça: ${respostas.raca}`;

    const idade = document.createElement('p');
    idade.textContent = `Idade: ${respostas.idade}`;

    const telefone = document.createElement('p');
    telefone.textContent = `Telefone: ${respostas.telefone}`;

    const sexo = document.createElement('p');
    sexo.textContent = `Sexo: ${respostas.sexo}`;

    cardInfo.appendChild(nomePet);
    cardInfo.appendChild(especie);
    cardInfo.appendChild(raca);
    cardInfo.appendChild(idade);
    cardInfo.appendChild(telefone);
    cardInfo.appendChild(sexo);

    card.appendChild(img);
    card.appendChild(cardInfo);

    cardContainer.appendChild(card);
}
