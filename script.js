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
        console.log(boat)
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


function animationBox(){
    // let boatDivs = document.getElementsByClassName("animate")
    // for(let boatMove of boatDivs){
    //     let leftPositon = boatMove.style.left
    //     let topPosition = boatMove.style.top
    //     leftPositon -= 1
    //     topPosition += 0.5
    // }
    // // inintialPositionTop += 0.5
    // // initialPositionLeft -= 1
    // // boxDiv.style.left = initialPositionLeft + "px";
    // // boxDiv.style.top = inintialPositionTop + "px";
    // // // boxDiv.style.transform = "rotate("+initialPosition+"deg)"
    // // // boxDiv.style.width = initialPosition + "px"
    // // // console.log(initialPosition)
    // // if(initialPositionLeft === 90){
    // //     console.log("hello")
    // //     clearInterval(animationInterval);
    // // }
}

animationBox()

// let animationInterval = setInterval(animationBox, Math.floor((Math.random()*5)+Math.random(0,60)))






