let boats = [
    { 
        name: "Blue Boat",
        nameRef: "blueboat",
        image: "images/blueboat.png",
        initialPositionLeft: 650,
        initialPositionTop: 100,
        positionFinish: 70,
        color: "blue",
    },
    { 
        name: "Red Boat",
        nameRef: "redboat",
        image: "images/redboat.png",
        initialPositionLeft: 710,
        initialPositionTop: 160,
        positionFinish: 120,
        color:"red",
    },
    { 
        name: "Yellow Boat",
        nameRef: "yellowboat",
        image: "images/yellowboat.png",
        initialPositionLeft: 795,
        initialPositionTop: 225,
        positionFinish: 220,
        color:"yellow",
    },
    { 
        name: "Green Boat",
        nameRef: "greenboat",
        image: "images/greenboat.png",
        initialPositionLeft: 875,
        initialPositionTop: 280,
        positionFinish: 300,
        color:"green",
    },
]

// ----------------------------- Create Game Background
let containerBox = document.getElementById("game");
let boxDiv = document.getElementById("animateDiv");
let userAmount = 100;
let userBet;
let userBoatSelection;

function createGame(){ 
    
    createUserSection()
    
    createButtonBoats()
    buttonAddEvent()
    let divEncapsuleBG = document.createElement("div");
    divEncapsuleBG.setAttribute("class", "capsule-bg");
    containerBox.appendChild(divEncapsuleBG);
    
    let divGameBackground = document.createElement("div");
    divGameBackground.setAttribute("class", "div-bg");
    divEncapsuleBG.appendChild(divGameBackground);
    

    createBoats()
}

createGame();

//-----------------------Boat Creation -------------------------------

function createBoats(){
    for(let boat in boats){
        let divGameBackground = document.querySelector(".div-bg");
        boat = boats[boat]
        let boatDiv = document.createElement("div");
        boatDiv.setAttribute("class", "animateDiv");
        let initialPositionLeft = boat.initialPositionLeft;
        let initialPositionTop = boat.initialPositionTop;
        boatDiv.style.left = initialPositionLeft + "px";
        boatDiv.style.top = initialPositionTop + "px";
        let boatImg = document.createElement("img");
        boatImg.setAttribute("class", "boat-img");
        boatImg.setAttribute("src", boat.image );
        // boatDiv.style.backgroundImage = boat.image
        divGameBackground.appendChild(boatDiv);
        boatDiv.appendChild(boatImg);
        boatDiv.setAttribute("id", boat.nameRef);
    }
}

// createBoats()

// --------------------Boat Animation ---------------------------------

let boatsIntervals = []
function animationBox(){
    let boatDivs = document.querySelectorAll(".animateDiv");
    for(let boatMove of boatDivs){
        const interval = setInterval(movingBoat, getRandomArbitrary(5, 15), boatMove);
        boatsIntervals.push(interval);
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function movingBoat(boat){
    let movementLeft = 0.14;
    let movementTop = 0.07;
    boat.style.left = parseFloat(boat.style.left) - movementLeft + "px";
    boat.style.top = parseFloat(boat.style.top) + movementTop + "px";
    checkwinner(boat);
}

//---------------------------- User Interaction Section ---------------------------------

function createUserSection(){ 
    let firstSection = document.getElementById("userSection");
    
    let titleChoose = document.createElement("div")
    titleChoose.setAttribute("id", "titleChoose")
    let chooseText = document.createElement("p")
    chooseText.textContent = "Choose your boat"
    titleChoose.appendChild(chooseText)
    firstSection.appendChild(titleChoose)

    let allsets = document.createElement("div");
    allsets.setAttribute("id", "allUserSets")
    firstSection.appendChild(allsets)


    let allUserSets = document.querySelector("#allUserSets")

    let boatButtonDiv = document.createElement("div");
    boatButtonDiv.setAttribute("id","boatButtonDiv");
    allUserSets.appendChild(boatButtonDiv);
    
    let divBet = document.createElement("div")
    divBet.setAttribute("class", "divBet")
    allUserSets.appendChild(divBet)
    let titleBet = document.createElement("p")
    titleBet.textContent = "Place your bet here:"
    divBet.appendChild(titleBet)

    let moneyDiv = document.createElement("div");
    moneyDiv.setAttribute("class","moneyDiv");
    moneyDiv.setAttribute("id","moneyDiv");
    allUserSets.appendChild(moneyDiv);

    let amountDiv = document.createElement("div");
    amountDiv.setAttribute("class", "money");
    let imageDiv = document.createElement("div")
    amountDiv.appendChild(imageDiv)
    imageDiv.innerHTML = `<img src="images/coins.png" alt="coins" width = "30px" height = "30px"> <span id="amount">${userAmount}</span>`;
    moneyDiv.appendChild(amountDiv);

    let formDiv = document.createElement("div");
    formDiv.setAttribute("class", "form-div");
    moneyDiv.appendChild(formDiv);

    let form = document.createElement("form");
    form.setAttribute("name", "placeBet");
    form.setAttribute("id","form-id");
    let amountBet = document.createElement("input")
    amountBet.setAttribute("type", "text");
    amountBet.setAttribute("name", "bet");
    amountBet.setAttribute("class", "bet-input");
    amountBet.setAttribute("id", "betInput");
    amountBet.setAttribute("placeholder", "");
    form.appendChild(amountBet);

    let betBtn = document.createElement("input")
    betBtn.setAttribute("type", "submit");
    betBtn.setAttribute("class", "submit-btn");
    betBtn.setAttribute("id", "submitBtn");
    betBtn.setAttribute("value", "Place Bet");
    form.appendChild(betBtn);

    formDiv.appendChild(form)

    let betForm = document.forms.placeBet;

    betForm.addEventListener("submit", placeBet);
    

    let buttonStart = document.createElement("button");

    buttonStart.textContent = "Start Game";
    buttonStart.setAttribute("class","start")
    buttonStart.addEventListener("click", animationBox);
    firstSection.appendChild(buttonStart);
    document.querySelector(".start").disabled = true;
}

//--------------Event Bet --------------------------

function placeBet(e){
    e.preventDefault()
    let betForm = document.forms.placeBet;
    let amountDiv = document.querySelector(".money");
    userBet = e.target.bet.value;
    let betValue = e.target.bet.value;
    if(betValue > userAmount){
        let errorBet = document.createElement("div");
        errorBet.setAttribute("id", "errorDiv");
        let errorBetP = document.createElement("p");
        errorBetP.setAttribute("class", "errorMessage");
        errorBetP.textContent = "Bet invalid - bet is higher than your amount";
        document.querySelectorAll('.errorMessage').forEach(elem => {
            elem.remove();
        });
        errorBet.appendChild(errorBetP);
        betForm.appendChild(errorBet);
        return;
    }else if(betValue === ""){
        let errorBet = document.createElement("div");
        errorBet.setAttribute("id", "errorDiv");
        let errorBetP = document.createElement("p");
        errorBetP.setAttribute("class", "errorMessage");
        errorBetP.textContent = "Bet invalid - please set an amount";
        document.querySelectorAll('.errorMessage').forEach(elem => {
            elem.remove();
        });
        errorBet.appendChild(errorBetP);
        betForm.appendChild(errorBet);
        return;
    }
    else if(userBoatSelection === "" || userBoatSelection === undefined){
        let errorBoat = document.createElement("div");
        errorBoat.setAttribute("id", "errorDiv");
        let errorBoatP = document.createElement("p");
        errorBoatP.setAttribute("class", "errorMessage");
        errorBoatP.textContent = "Bet invalid - please choose a boat";
        document.querySelectorAll('.errorMessage').forEach(elem => {
            elem.remove();
        });
        errorBoat.appendChild(errorBoatP);
        betForm.appendChild(errorBoat);
        return;
    }
    userAmount = userAmount - betValue;
    let amount = document.querySelector("#amount");
    amount.textContent = userAmount;
    document.querySelectorAll('.btn-boat').forEach(elem => {
        elem.disabled = true;
        });
    document.querySelectorAll('.errorMessage').forEach(elem => {
        elem.remove();
    });
    document.querySelector("#betInput").disabled = true;
    document.querySelector("#submitBtn").disabled = true;
    document.querySelector(".start").disabled = false;
    return userAmount
}

let inputBet = document.getElementById("betInput");
inputBet.addEventListener("change", clearError);
function clearError(){
    let errorDiv = document.getElementById("errorDiv");
    let errorMessage = document.querySelector(".errorMessage");
    if(errorMessage !== null && errorDiv.firstChild){
        errorDiv.removeChild(errorMessage);
    }
}

//---------------Creating Buttons with Boats -----------------

function createButtonBoats(){
    for(let boat in boats){
        boat = boats[boat];
        // console.log(boat)
        let boatButton = document.createElement("button");
        let divButton = document.querySelector("#boatButtonDiv");
        boatButton.setAttribute("class", "btn-boat");
        boatButton.style.background = `url(${boat.image}) no-repeat center center`;
        boatButton.style.backgroundSize="50% 90%";
        boatButton.setAttribute("id", `${boat.nameRef}-btn`);
        boatButton.style.backgroundColor = `${boat.color}`;
        boatButton.style.color = `${boat.letter}`;
        boatButton.style.padding = "8px";
        boatButton.style.margin = "3px";
        boatButton.style.borderRadius = "8px";
        divButton.appendChild(boatButton);
    }
}

//---------------Event On Boat's Buttons ---------------
function buttonAddEvent(){
    let buttonsBoats = document.querySelectorAll(".btn-boat");
    for(let buttonBoat of buttonsBoats){
        buttonBoat.addEventListener("click", setUserBoat);
        console.log(buttonBoat.id);
    }
}

function removeBtnBoatClass(){
    let buttonsBoats = document.querySelectorAll(".btn-boat");
    for(let boat of buttonsBoats){
        boat.classList.remove("active");
    }
}

function enableButtonBoats(){
    let buttonsBoats = document.querySelectorAll(".btn-boat");
    for(let boat of buttonsBoats){
        boat.removeAttribute("disabled");
    }
}

function setUserBoat(e){
    removeBtnBoatClass();
    userBoatSelection = e.target.id;
    e.target.className += " active";
}

//----------------------------------- Game Logic -----------------

function checkwinner(boat){
    // console.log(userBoatSelection);
    let boatSettings = boats.find(settings => settings.nameRef === boat.id);
    let userBoatSelected = userBoatSelection.replace("-btn","");
    // console.log(userBoatSelected);
    let hasBoatWin = (boat.style.left.replace('px',"") > boatSettings.positionFinish);
    // console.log(hasBoatWin)
    if(hasBoatWin === true){
        return;
    } else{
        boatsIntervals.forEach(interval => clearInterval(interval))
        if(boat.id === userBoatSelected ){
            showWin();
        }
        else{
            showLose();
        }
    }
}

function createWinModal(){
    const winModal = `
    <div id="winModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <h2>You Win!</h2>
            </div>
            <div class="modal-body">
                <p class="win-message">Congratulations!! You received: ${userPrize}! You now have ${userAmount}</p>
                <button id="newGame" class="btn-modal">Continue Game</button>
                <button id="reset" class="btn-modal"> Reset</button>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>`

    let modal = document.querySelector("#modalWin");
    modal.innerHTML = winModal;
}

let userPrize
function showWin(){
    userPrize = userBet * 2;
    userAmount = parseInt(userAmount) + parseInt(userBet) + parseInt(userPrize);

    createWinModal()
    let winModal = document.querySelector("#winModal")
    let span = document.getElementsByClassName("close")[0];
    winModal.style.display = "block";

    span.onclick = function() {
        winModal.style.display = "none";
      }
    window.onclick = function(event) {
        if (event.target == winModal) {
            winModal.style.display = "none";
        }
    }
    let playAgain = document.getElementById("newGame");
    playAgain.addEventListener("click", newGame);
    let resetGame = document.getElementById("reset");
    resetGame.addEventListener("click", reset);
}

function createLoseModal(){
    const loseModal = `
    <div id="loseModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <h2>You lose!</h2>
            </div>
            <div class="modal-body">
                <p class="lose-message">Better Luck next time! You now have ${userAmount}</p>
                <button id="newGame" class="btn-modal">Continue Game</button>
                <button id="reset" class="btn-modal"> Reset</button>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>`

    let modal = document.querySelector("#modalLose");
    modal.innerHTML = loseModal;
}

function showLose(){
    createLoseModal()
    let loseModal = document.getElementById("loseModal");
    let span = document.getElementsByClassName("close")[0];
    loseModal.style.display = "block";


    span.onclick = function() {
        loseModal.style.display = "none";
      }
    window.onclick = function(event) {
        if (event.target == loseModal) {
            loseModal.style.display = "none";
        }
    }
    let playAgain = document.getElementById("newGame");
    playAgain.addEventListener("click", newGame);
    let resetGame = document.getElementById("reset");
    resetGame.addEventListener("click", reset);
}


function newGame(){
    let lose = document.querySelector("#loseModal")
    let win = document.querySelector("#winModal")
    if(lose){
        lose.remove()
    }
    if(win){
        win.remove()
    }
    let boatsDiv = document.querySelectorAll(".animateDiv");
    let amount = document.querySelector("#amount")
    amount.textContent = userAmount;
    for(let boat of boatsDiv){
            let boatSettings = boats.find(settings => settings.nameRef === boat.id);
            console.log(boatSettings);
            console.log(boat.style.left);
            boat.style.left = boatSettings.initialPositionLeft + "px";
            boat.style.top = boatSettings.initialPositionTop + "px";
        }
    removeBtnBoatClass()
    userBoatSelection = "";
    
    enableButtonBoats()
    document.querySelector("#betInput").disabled = false;
    document.querySelector("#betInput").value = "";
    document.querySelector("#submitBtn").disabled = false;
    document.querySelector(".start").disable = true;
}


function reset(){
    let lose = document.querySelector("#loseModal")
    let win = document.querySelector("#winModal")
    if(lose){
        lose.remove()
    }
    if(win){
        win.remove()
    }
    userAmount = 100;
    userBet = 0;
    userBoatSelection = "";
    let amount = document.querySelector("#amount")
    amount.textContent = userAmount;
    
    let boatsDiv = document.querySelectorAll(".animateDiv");
    for(let boat of boatsDiv){
            let boatSettings = boats.find(settings => settings.nameRef === boat.id)
            console.log(boatSettings);
            console.log(boat.style.left);
            boat.style.left = boatSettings.initialPositionLeft + "px";
            boat.style.top = boatSettings.initialPositionTop + "px";
        }
    removeBtnBoatClass()
    enableButtonBoats()
    document.querySelector("#betInput").disabled = false;
    document.querySelector("#betInput").value = "";
    document.querySelector("#submitBtn").disabled = false;
    document.querySelector(".start").disable = true;
}


