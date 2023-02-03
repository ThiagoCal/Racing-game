let containerBox = document.getElementById("game")
let boxDiv = document.getElementById("animate")

let boats = [
    { 
        name: "Blue Boat",
        image: "url('images/blueboat.png')",
        initialPositionLeft: 90,
        inintialPositionTop: 14,
        color: "blue",
        letter: "white"
    },
    { 
        name: "Red Boat",
        image: "url('images/redboat.png')",
        initialPositionLeft: 98,
        inintialPositionTop: 20,
        color: "red",
        letter: "white",
    },
    { 
        name: "Yellow Boat",
        image: "url('images/yellowboat.png')",
        initialPositionLeft: 109,
        inintialPositionTop: 25,
        color: "yellow",
        letter: "black"
    },
    { 
        name: "Green Boat",
        image: "url('images/greenboat.png')",
        initialPositionLeft: 118,
        inintialPositionTop: 32,
        color: "green",
        letter: "white"
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
        boatDiv.addEventListener("click", function() {
            selectBoat(boatDiv);
    })
}
}

createBoats()
let moving;
function animationBox(){
    let boatDivs = document.querySelectorAll(".animate")
    let id = null
    clearInterval(id);
    for(let boatMove of boatDivs){
        moving = setInterval(movingBoats, getRandomArbitrary(10, 20), boatMove)
    }
}
let selectedBoat = null;
function selectBoat(boatDiv) {
    if (selectedBoat) {
        selectedBoat.style.filter = "invert(0)";
    }
    if (selectedBoat === boatDiv) {
        selectedBoat = null;
    } else {
        selectedBoat = boatDiv;
        selectedBoat.style.filter = "invert(1)";
    }
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const finishLine = 25;

  function movingBoats(boat){
      console.log(boat)
      let movementLeft = 0.14;
      let movementTop = 0.07;
      boat.style.left = parseFloat(boat.style.left) - movementLeft + "vh";
      boat.style.top = parseFloat(boat.style.top) + movementTop + "vh";
      if (parseFloat(boat.style.left) < finishLine) {
          clearInterval(moving);
          endGame(boat);
          return;
      }
  }
  
  function endGame(boat) {
      let boatDivs = document.querySelectorAll(".animate");
      for (let i = 0; i < boatDivs.length; i++) {
          clearInterval(moving);
      }
    //   alert(`${boat.id} wins!`);
  }
  



let buttonStart = document.createElement("button")
buttonStart.textContent = "Start Game";
buttonStart.setAttribute("class","start")
buttonStart.addEventListener("click", animationBox)
let firstSection = document.getElementById("userSection")
firstSection.appendChild(buttonStart)
firstSection.style.padding = "10px"
let form = document.createElement("form")
firstSection.appendChild(form)
for (let boat of boats) {
    let button = document.createElement("button");
    button.setAttribute("class", "design")
    button.setAttribute("id", boat.color)
    button.textContent = `Select ${boat.name}`;
    button.style.backgroundColor = `${boat.color}`
        button.style.color = `${boat.letter}`
    button.addEventListener("mouseenter",function(){
        button.style.color = `${boat.color}`
        button.style.backgroundColor = `white`
    })
    button.addEventListener("mouseleave",function (){
        button.style.backgroundColor = `${boat.color}`
        button.style.color = `${boat.letter}`
    })
    
    button.style.padding = "8px"
    button.style.margin = "3px"
    button.style.borderColor = "white"

    button.style.borderRadius = "8px"
    button.addEventListener("click", function () {
        if (selectedBoat) {
            document.getElementById(selectedBoat.name).style.filter = "";
          }
          selectedBoat = boat;
          document.getElementById(boat.name).style.filter = "invert(1)";
        });
    firstSection.appendChild(button);
  }
  
  let button
function pickBoats(){

}
let errorMessage = document.createElement("div");
errorMessage.style.color = "red";
errorMessage.style.marginTop = "5px";

let betAmount = 0;
var initialAmount = 100;
let profit = document.createElement("form")
let inputBet = document.createElement("input");
console.log(inputBet.value)
inputBet.setAttribute("type", "number");
inputBet.setAttribute("class","input")

let betButton = document.createElement("button");
betButton.textContent = "Place Bet";
betButton.setAttribute("class","bet")
profit.appendChild(inputBet)
profit.appendChild(betButton)
console.log(inputBet.value)
betButton.addEventListener("click", function () {
  betAmount = parseInt(inputBet.value);
  
  if (betAmount > initialAmount) {
    errorMessage.textContent = "You don't have enough balance";
    firstSection.appendChild(errorMessage);
    setTimeout(function (){
        errorMessage.style.display ="none"
    },5000)
    return;
  } else if (selectedBoat === null) {
    errorMessage.textContent = "Please select a boat";
    firstSection.appendChild(errorMessage);
    setTimeout(function (){
        errorMessage.style.display ="none"
    },5000)
    return;
  } else {
    initialAmount -= betAmount;
  }
});

firstSection.appendChild(inputBet);
firstSection.appendChild(betButton);
let Amount = document.createElement("div")
Amount.setAttribute("class", "money")
Amount.innerHTML = `<img src="images/coins.png" alt="coins" width = "30px" height = "30px"> <sect>${initialAmount}</sect>`
firstSection.appendChild(Amount)

  