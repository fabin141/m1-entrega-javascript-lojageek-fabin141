let listFigure = [];
let listPainting = [];

function facItem(nome, valor, imagem){
    return {
        nome: nome || "Nome do Item",
        valor: valor || "Valor do item",
        imagem: imagem,
    };
};

function createItem(){
    let relogioAnal = facItem("Relogio Analógico", "R$50,00", "./assets/img/painting/clock.jpg");
    createPaintingItem(relogioAnal);

    let gamepadPs4 = facItem("Gamepad PS4", "R$60,00", "./assets/img/painting/gamepad.jpg"); 
    createPaintingItem(gamepadPs4);

    let c3PoStarWars = facItem("C3-PO - StarWars", "R$100,00", './assets/img/painting/personagem.jpg');
    createPaintingItem(c3PoStarWars);

    let animewoman = facItem("Anime Woman", "R$200,00", "./assets/img/actions/animewoman.jpg");
    createFigureItem(animewoman);

    let gokuSsj3 = facItem("Goku SSJ 3", "R$250,00", "./assets/img/actions/dragonballpersonagem.jpg");
    createFigureItem(gokuSsj3);

    let mestreYodaBaby = facItem("Mestre Yoda baby", "R$200,00", './assets/img/actions/starwarspersonagem.jpg');
    createFigureItem(mestreYodaBaby);    
};

function createFigureItem(pItem){
    listFigure.push(pItem);
};

function createPaintingItem(pItem){
    listPainting.push(pItem);
};
createItem();


let secaolistPainting = document.getElementsByClassName('list-painting')[0];
let secaolistFigure = document.getElementsByClassName('list-figure')[0];


function adicionaItemLista(pItem){

    let elementoLista = document.createElement('li');

    let div = document.createElement('div');
    let image = document.createElement('img');
    let nome = document.createElement('span');
    let valor = document.createElement('span');

    image.src = `${pItem.imagem}`;
    nome.innerText = `${pItem.nome}`;
    valor.innerText = `${pItem.valor}`;

    elementoLista.classList.add("card");
    div.classList.add("img-item");
    nome.classList.add("titulo-item");
    valor.classList.add("valor-item");
    
    div.appendChild(image);

    elementoLista.append(div, nome, valor);

    return elementoLista;
}

for(let i = 0; i < listFigure.length; i++){
    secaolistFigure.appendChild(adicionaItemLista(listFigure[i]));
}

for(let i = 0; i < listPainting.length; i++){
    secaolistPainting.appendChild(adicionaItemLista(listPainting[i]));
}
