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
        moving = setInterval(movingBoats, getRandomArbitrary(80, 200), boatMove)
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function movingBoats(boat){
    console.log(boat)
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







