let itens = [
    {
        id: 0,
        nome: 'Anime',
        preco: 'R$250,00',
        type: 'figure',
        url: "./assets/img/actions/animewoman.jpg"
    },
    {
        id: 1,
        nome: 'DragonBall',
        preco: 'R$100,00',
        type: 'figure',
        url: "./assets/img/actions/dragonballpersonagem.jpg"
    },
    {
        id: 2,
        nome: "StarWars",
        preco: 'R$200,00',
        type: 'figure',
        url: "./assets/img/actions/starwarspersonagem.jpg"
    },
    {
        id: 0,
        nome: 'Clock',
        preco: 'R$50,00',
        type: 'quadro',
        url: "./assets/img/painting/clock.jpg"
    },
    {
        id: 1,
        nome: 'Gamepad',
        preco: 'R$80,00',
        type: 'quadro',
        url: "./assets/img/painting/gamepad.jpg"
    },
    {
        id: 2,
        nome: "C3PO",
        preco: 'R$60,00',
        type: "quadro",
        url: "./assets/img/painting/personagem.jpg"
    },
]

let listFigures = []
let listFrames = []

function separateItens(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].type == "quadro") {
            listFrames.push(lista[i])
        }
        if (lista[i].type == "figure") {
            listFigures.push(lista[i])
        }
    }
}
separateItens(itens)
console.log(listFigures)
console.log(listFrames)


let secaoFigure = document.querySelector(".itens_action")
let secaoFrames = document.querySelector(".itens_frame")
console.log(secaoFigure)

function addElementos(lista){
for(let i = 0; i <lista.length; i++){


    let elementoLista = document.createElement("li")
    let img = document.createElement("img")
    let nome = document.createElement("h2")
    let preco = document.createElement("p")

    elementoLista.classList.add("li")
    img.classList.add("imagem")
    img.src = lista[i].url
    nome.classList.add("nome")
    nome.innerText = `${lista[i].nome}`
    preco.classList.add("preco")
    preco.innerText = `${lista[i].preco}`
 

    elementoLista.append(img,nome,preco)
    if(lista == listFigures){
        secaoFigure.appendChild(elementoLista)
    }else{
        secaoFrames.appendChild(elementoLista)
    }
    console.log(elementoLista)
}
}

addElementos(listFigures)
addElementos(listFrames)

{/* <li class="li">
                    <img class="imagem" src="" alt="">

                    <h2 class="nome">Nome do produto</h2>
                    <p class="preco">Valor do produto</p>
                    <p class="tipo"></p>
                </li>
                */}