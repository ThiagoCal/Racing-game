let containerBox = document.getElementById("game")
let boxDiv = document.getElementById("animate")

let boats = [
    { 
        name: "Blue Boat",
        nameRef: "blueboat",
        image: "url('images/blueboat.png')",
        initialPositionLeft: 90,
        inintialPositionTop: 14,
        positionFinish: 5.6,
        color:"blue",
    },
    { 
        name: "Red Boat",
        nameRef: "redboat",
        image: "url('images/redboat.png')",
        initialPositionLeft: 98,
        inintialPositionTop: 20,
        positionFinish: 18,
        color:"red",
    },
    { 
        name: "Yellow Boat",
        nameRef: "yellowboat",
        image: "url('images/yellowboat.png')",
        initialPositionLeft: 109,
        inintialPositionTop: 25,
        positionFinish: 26,
        color:"yellow",
    },
    { 
        name: "Green Boat",
        nameRef: "greenboat",
        image: "url('images/greenboat.png')",
        initialPositionLeft: 118,
        inintialPositionTop: 32,
        positionFinish: "",
        color:"green",
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
        boatDiv.setAttribute("id", boat.nameRef)
        containerBox.appendChild(boatDiv)
    }
}

createBoats()


let boatsIntervals = []
function animationBox(){
    let boatDivs = document.querySelectorAll(".animate")
    for(let boatMove of boatDivs){
        const interval = setInterval(movingBoat, getRandomArbitrary(80, 200), boatMove)
        boatsIntervals.push(interval)
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
    checkwinner(boat)
}

let buttonStart = document.createElement("button")
buttonStart.textContent = "Start Game";
buttonStart.addEventListener("click", animationBox)
let firstSection = document.getElementById("userSection")
firstSection.appendChild(buttonStart)


let userAmount = 100;
let userBet;

let amountDiv = document.createElement("div")
amountDiv.textContent = `$${userAmount}`
firstSection.appendChild(amountDiv)

let formDiv = document.createElement("div")
formDiv.setAttribute("class", "form-div")
firstSection.appendChild(formDiv)

let form = document.createElement("form")
form.setAttribute("name", "placeBet")
let amountBet = document.createElement("input")
amountBet.setAttribute("type", "text");
amountBet.setAttribute("name", "bet");
amountBet.setAttribute("class", "bet-input");
amountBet.setAttribute("id", "betInput");
amountBet.setAttribute("placeholder", "");
form.appendChild(amountBet)

let betBtn = document.createElement("input")
betBtn.setAttribute("type", "submit");
betBtn.setAttribute("class", "submit-btn");
betBtn.setAttribute("id", "submitBtn");
betBtn.setAttribute("value", "Submit");
form.appendChild(betBtn)

formDiv.appendChild(form)

let betForm = document.forms.placeBet;

betForm.addEventListener("submit", placeBet)

function placeBet(e){
    e.preventDefault()
    console.log(e.target.bet.value)
    userBet = e.target.bet.value
    let betValue = e.target.bet.value
    console.log(userBoatSelection)
    if(betValue > userAmount){
        console.log("hello bet invalid")
        let errorBet = document.createElement("div")
        errorBet.setAttribute("id", "errorDiv")
        let errorBetP = document.createElement("p")
        errorBetP.setAttribute("class", "errorMessage")
        errorBetP.textContent = "Bet invalid - bet is higher than your amount"
        errorBet.appendChild(errorBetP)
        betForm.appendChild(errorBet)
        return;
    }else if(betValue === ""){
        console.log("hello bet invalid")
        let errorBet = document.createElement("div")
        errorBet.setAttribute("id", "errorDiv")
        let errorBetP = document.createElement("p")
        errorBetP.setAttribute("class", "errorMessage")
        errorBetP.textContent = "Bet invalid - please set an amount"
        errorBet.appendChild(errorBetP)
        betForm.appendChild(errorBet)
        return;
    }
    else if(userBoatSelection === "" || userBoatSelection === undefined){
        let errorBoat = document.createElement("div")
        errorBoat.setAttribute("id", "errorDiv")
        let errorBoatP = document.createElement("p")
        errorBoatP.setAttribute("class", "errorMessage")
        errorBoatP.textContent = "Bet invalid - please choose a boat"
        errorBoat.appendChild(errorBoatP)
        betForm.appendChild(errorBoat)
        return;
    }else
        // betForm.removeChild(lastElementChild);
        amountDiv.textContent = userAmount-betValue
        document.querySelectorAll(".btn-boat").disabled = true;
        document.querySelector("#betInput").disabled = true;
        document.querySelector("#submitBtn").disabled = true;
        return userAmount
}

let inputBet = document.getElementById("betInput")
inputBet.addEventListener("change", clearError)
function clearError(){
    let erroDiv = document.getElementById("errorDiv")
    let errorMessage = document.querySelector(".errorMessage")
    if(errorMessage !== null){
        erroDiv.removeChild(errorMessage);
    }
}

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


function createButtonBoats(){
    for(let boat in boats){
        boat = boats[boat]
        // console.log(boat)
        let boatButton = document.createElement("button")
        boatButton.setAttribute("class", "btn-boat")
        boatButton.style.backgroundImage = boat.image
        boatButton.setAttribute("id", `${boat.nameRef}-btn`)
        boatButton.style.backgroundColor = `${boat.color}`
        boatButton.style.color = `${boat.letter}`
        boatButton.style.padding = "8px"
        boatButton.style.margin = "3px"
        boatButton.style.borderRadius = "8px"    
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

buttonAddEvent()

function removeBtnBoatClass(){
    for(let boat of buttonsBoats){
        boat.classList.remove("active")
    }
}

function setUserBoat(e){
    userBoatSelection = e.target.id
    removeBtnBoatClass()
    e.target.className += " active"
}



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


function checkwinner(boat){
    let boatSettings = boats.find(settings => settings.nameRef === boat.id)

    console.log(boat.style.left)
    let hasBoatWin = (boat.style.left.replace('vh',"") > boatSettings.positionFinish)
    console.log(hasBoatWin)
    if(hasBoatWin === true){
        return;
    } else{
        boatsIntervals.forEach(interval => clearInterval(interval))
        if(boat.id === userBoatSelection){
            showWin()
        }
        else{
            console.log('lose')
        }
    }
}

function showWin(){
    let winMessageDiv = document.createElement("div")
    let winMessage = document.createElement("p")
    let userPrize = userBet * 1.2;
    userAmount = userAmount + userPrize;
    amountDiv.textContent = userAmount;
    winMessage.textContent = `YOU WIN! ${userPrize}! You have now ${userAmount} `
    firstSection.appendChild(winMessageDiv)
}
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

