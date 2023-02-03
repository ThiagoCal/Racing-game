let containerBox = document.getElementById("game")
let boxDiv = document.getElementById("animate")

let boats = [
    { 
        name: "blueboat",
        image: "url('images/blueboat.png')",
        initialPositionLeft: 90,
        inintialPositionTop: 14,
    },
    { 
        name: "redboat",
        image: "url('images/redboat.png')",
        initialPositionLeft: 98,
        inintialPositionTop: 20,
    },
    { 
        name: "yellowboat",
        image: "url('images/yellowboat.png')",
        initialPositionLeft: 109,
        inintialPositionTop: 25,
    },
    { 
        name: "greenboat",
        image: "url('images/greenboat.png')",
        initialPositionLeft: 118,
        inintialPositionTop: 32,
    },
]

function createBoats(){
    for(let boat in boats){
        boat = boats[boat]
        // console.log(boat)
        let boatDiv = document.createElement("div")
        boatDiv.setAttribute("class", "animate")
        let initialPositionLeft = boat.initialPositionLeft
        let initialPositionTop = boat.inintialPositionTop
        boatDiv.style.left = initialPositionLeft + "vh"
        boatDiv.style.top = initialPositionTop + "vh"
        boatDiv.style.backgroundImage = boat.image
        boatDiv.setAttribute("id", boat.name)
        containerBox.appendChild(boatDiv)
    }
}

createBoats()

let moving 
function animationBox(){
    let boatDivs = document.querySelectorAll(".animate")
    let id = null
    clearInterval(id);
    for(let boatMove of boatDivs){
        moving = setInterval(movingBoat, getRandomArbitrary(80, 200), boatMove)
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function movingBoat(boat){
    // console.log(boat)
    let movementLeft = 0.14;
    let movementTop = 0.07;
    boat.style.left = parseFloat(boat.style.left) - movementLeft + "vh";
    boat.style.top = parseFloat(boat.style.top) + movementTop + "vh";
    if (parseFloat(boat.style.left) < 5.6) {
        clearInterval(moving);
    //   alert(`${boatMove.id} wins!`);
    }
}


let buttonStart = document.createElement("button")
buttonStart.textContent = "Start Game";
buttonStart.addEventListener("click", animationBox)
let firstSection = document.getElementById("userSection")
firstSection.appendChild(buttonStart)


let userAmount = 100;

let amountDiv = document.createElement("div")
amountDiv.textContent = `$${userAmount}`
firstSection.appendChild(amountDiv)

let amountBet = document.createElement("input")
firstSection.appendChild(amountBet)

function createButtonBoats(){
    for(let boat in boats){
        boat = boats[boat]
        // console.log(boat)
        let boatButton = document.createElement("button")
        boatButton.setAttribute("class", "btn-boat")
        boatButton.style.backgroundImage = boat.image
        boatButton.setAttribute("id", `${boat.name}-btn`)
        firstSection.appendChild(boatButton)
    }
}

createButtonBoats()


let userBoatSelection;

let buttonsBoats = document.querySelectorAll(".btn-boat")

function buttonAddEvent(){
    for(let buttonBoat of buttonsBoats){
        buttonBoat.addEventListener("click", setUserBoat)
        console.log(buttonBoat.id)
    }
}

function setUserBoat(e){
    userBoatSelection = e.target.id
    e.target.className += " active"
    console.log(e.target.className)
    console.log(userBoatSelection)
}

buttonAddEvent()


//atribuir uma winning position no objeto de boat
// verde left 42vh
// checkwinner dentro do movingBoat
// se o style do boat for maior ou igual que o winningposition

//Usuario
//4 botoes pra cada barco
//variavel global da selecao do barco
//eventlistener do botao do barco
//muda a classe todos botaoes tira classe 
//altera a variavel global
//coloca a classe no selecionado

//funcao bet
//ele verifica saldo
//mensagem de erro se nao tiver
//return
//verifica se tem barco selecionado
//mensagem de erro se nao tiver
//return
//ele tira o amount da bet do saldo do do usuario
// salva o valor da bet numa variavel global
//disable butoes do barco, disable input, disable bet


//checkwinner(boat)
//checa se o passou da linha de chegada
// hasBoatWin = positionleft < position winnning
//if hasBoatWin = false -> return
//se passou verifica se o barco apostado === do usuario
// boatWasBet = boat.id == bettedBoat(variavel global do barco selecionado)
// if boatWasBet
// showWin()
// showLose
//funcao showWin()
//else showLose()

//funcao showWinnner
//se for saldo = (bet *1.2) + saldo
//mostra o quanto ganhou e parabeniza
//aparece um botao para apostar novamente

//funcao showLose
//mostra o usuario perdeu
// aparece a opcao de apostar novamente

//funcao newBet()
// reseta a posicao dos barcos resetBoats() 
// habilita os botoes dos barcos e do bet

