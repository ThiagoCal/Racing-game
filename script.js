let boats = [
    { 
        name: "Blue Boat",
        nameRef: "blueboat",
        image: "url('images/blueboat.png')",
        initialPositionLeft: 90,
        initialPositionTop: 14,
        positionFinish: 5.6,
        color:"blue",
    },
    { 
        name: "Red Boat",
        nameRef: "redboat",
        image: "url('images/redboat.png')",
        initialPositionLeft: 98,
        initialPositionTop: 20,
        positionFinish: 18,
        color:"red",
    },
    { 
        name: "Yellow Boat",
        nameRef: "yellowboat",
        image: "url('images/yellowboat.png')",
        initialPositionLeft: 109,
        initialPositionTop: 25,
        positionFinish: 26,
        color:"yellow",
    },
    { 
        name: "Green Boat",
        nameRef: "greenboat",
        image: "url('images/greenboat.png')",
        initialPositionLeft: 118,
        initialPositionTop: 32,
        positionFinish: 39,
        color:"green",
    },
]

let containerBox = document.getElementById("game")
let boxDiv = document.getElementById("animate")

//-----------------------Boat Creation -------------------------------
function createBoats(){
    for(let boat in boats){
        boat = boats[boat]
        let boatDiv = document.createElement("div")
        boatDiv.setAttribute("class", "animate")
        let initialPositionLeft = boat.initialPositionLeft
        let initialPositionTop = boat.initialPositionTop
        boatDiv.style.left = initialPositionLeft + "vh"

        boatDiv.style.top = initialPositionTop + "vh"
        boatDiv.style.backgroundImage = boat.image
        boatDiv.setAttribute("id", boat.nameRef)
        containerBox.appendChild(boatDiv)
    }
}

createBoats()


// --------------------Boat Animation ---------------------------------
let boatsIntervals = []
function animationBox(){
    let boatDivs = document.querySelectorAll(".animate")
    for(let boatMove of boatDivs){
        const interval = setInterval(movingBoat, getRandomArbitrary(20, 80), boatMove)
        boatsIntervals.push(interval)
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function movingBoat(boat){
    let movementLeft = 0.14;
    let movementTop = 0.07;
    boat.style.left = parseFloat(boat.style.left) - movementLeft + "vh";
    boat.style.top = parseFloat(boat.style.top) + movementTop + "vh";
    checkwinner(boat)
}

//---------------------------- User Interaction Section ---------------------------------

let buttonStart = document.createElement("button")

buttonStart.textContent = "Start Game";
buttonStart.setAttribute("class","start")
buttonStart.addEventListener("click", animationBox)
let firstSection = document.getElementById("userSection")
firstSection.appendChild(buttonStart)

let userAmount = 100;
let userBet;

let moneyDiv = document.createElement("div")
moneyDiv.setAttribute("class","moneyDiv")
moneyDiv.setAttribute("id","moneyDiv")
firstSection.appendChild(moneyDiv)

let amountDiv = document.createElement("div")
amountDiv.setAttribute("class", "money");
amountDiv.innerHTML = `<img src="images/coins.png" alt="coins" width = "30px" height = "30px"> <sect>${userAmount}</sect>`
moneyDiv.appendChild(amountDiv)

let formDiv = document.createElement("div")
formDiv.setAttribute("class", "form-div")
moneyDiv.appendChild(formDiv)

let form = document.createElement("form")
form.setAttribute("name", "placeBet")
form.setAttribute("id","form-id")
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
betBtn.setAttribute("value", "Place Bet");
form.appendChild(betBtn)

formDiv.appendChild(form)

let betForm = document.forms.placeBet;

betForm.addEventListener("submit", placeBet)
let boatButtonDiv = document.createElement("div")
boatButtonDiv.setAttribute("id","boatButtonDiv")
firstSection.appendChild(boatButtonDiv)
//--------------Event Bet --------------------------
function placeBet(e){
    e.preventDefault()
    
    userBet = e.target.bet.value
    let betValue = e.target.bet.value
    console.log(userBoatSelection)
    if(betValue > userAmount){
        let errorBet = document.createElement("div")
        errorBet.setAttribute("id", "errorDiv")
        let errorBetP = document.createElement("p")
        errorBetP.setAttribute("class", "errorMessage")
        errorBetP.textContent = "Bet invalid - bet is higher than your amount"
        errorBet.appendChild(errorBetP)
        betForm.appendChild(errorBet)
        return;
    }else if(betValue === ""){
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
    }
        userAmount = userAmount - betValue
        amountDiv.innerHTML = `<img src="images/coins.png" alt="coins" width = "30px" height = "30px"> <sect>${userAmount}</sect>`
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

//---------------Creating Buttons with Boats
function createButtonBoats(){
    for(let boat in boats){
        boat = boats[boat]
        // console.log(boat)
        let boatButton = document.createElement("button")
        let divButton = document.querySelector("#boatButtonDiv")
        boatButton.setAttribute("class", "btn-boat")
        boatButton.style.background = `${boat.image} no-repeat center center`;
        boatButton.style.backgroundSize="50% 90%";
        boatButton.setAttribute("id", `${boat.nameRef}-btn`)
        boatButton.style.backgroundColor = `${boat.color}`
        boatButton.style.color = `${boat.letter}`
        boatButton.style.padding = "8px"
        boatButton.style.margin = "3px"
        boatButton.style.borderRadius = "8px"    
        divButton.appendChild(boatButton)
    }
}

createButtonBoats()


let userBoatSelection;

let buttonsBoats = document.querySelectorAll(".btn-boat")
//---------------Event On Boat's Buttons ---------------
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

//----------------------------------- Game Logic -----------------

function checkwinner(boat){
    let boatSettings = boats.find(settings => settings.nameRef === boat.id)
    let userBoatSelected = userBoatSelection.replace("-btn","")
    let hasBoatWin = (boat.style.left.replace('vh',"") > boatSettings.positionFinish)
    // console.log(hasBoatWin)
    console.log(userBoatSelected)
    if(hasBoatWin === true){
        console.log(userBoatSelected)
        return;
    } else{
        boatsIntervals.forEach(interval => clearInterval(interval))
        if(boat.id === userBoatSelected ){
            showWin()
        }
        else{
            showLose()
        }
    }
}

function showWin(){
    let winMessageDiv = document.createElement("div")
    winMessageDiv.setAttribute("class", "win-div")
    let winMessage = document.createElement("p")
    let userPrize = userBet * 1.2;
    
    userAmount = userAmount + userPrize;
    console.log(userAmount)
    amountDiv.textContent = userAmount;
    winMessage.textContent = `YOU WIN! ${userPrize}! You have now ${userAmount}`
    let divUserMessage = document.createElement("div")
    divUserMessage.setAttribute("class", "button-section")
    let playAgain = document.createElement("button")
    playAgain.setAttribute("class", "play-again-btn")
    playAgain.textContent = "Play Again"
    let reset = document.createElement("button")
    reset.setAttribute("class", "play-again-btn")
    reset.textContent = "Reset"
    divUserMessage.appendChild(playAgain)
    divUserMessage.appendChild(reset)
    winMessageDiv.appendChild(winMessage)
    winMessageDiv.appendChild(divUserMessage)
    firstSection.appendChild(winMessageDiv)
}


function showLose(){
    let loseDivMessage = document.createElement("div")
    loseDivMessage.setAttribute("class", "win-div")
    let loseMessage = document.createElement("p")
    console.log(userAmount)
    loseMessage.textContent = `You Lose! You have now ${userAmount}`
    let divUserMessage = document.createElement("div")
    divUserMessage.setAttribute("class", "button-section")
    let playAgain = document.createElement("button")
    playAgain.setAttribute("class", "play-again-btn")
    playAgain.textContent = "Play Again"
    playAgain.addEventListener("click", newGame)
    let reset = document.createElement("button")
    reset.setAttribute("class", "play-again-btn")
    reset.textContent = "Reset"
    divUserMessage.appendChild(playAgain)
    divUserMessage.appendChild(reset)
    loseDivMessage.appendChild(loseMessage)
    loseDivMessage.appendChild(divUserMessage)
    firstSection.appendChild(loseDivMessage)
}

function newGame(){
    for(let boat of buttonsBoats){
        let boatSettings = boats.find(settings => settings.nameRef === boat.id)
        console.log(boatSettings)
        boat.style.left = boatSettings.initialPositionLeft
        boat.style.top = boatSettings.initialPositionTop
    }
    document.querySelectorAll(".btn-boat").disabled = false;
    document.querySelector("#betInput").disabled = false;
    document.querySelector("#betInput").value = "";
    document.querySelector("#submitBtn").disabled = false;
}