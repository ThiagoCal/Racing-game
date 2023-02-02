let containerBox = document.getElementById("container")
let boxDiv = document.getElementById("animate")
let initialPositionLeft = 645;
let inintialPositionTop = 105;
function animationBox(){
    inintialPositionTop += 0.5
    initialPositionLeft -= 1
    boxDiv.style.left = initialPositionLeft + "px";
    boxDiv.style.top = inintialPositionTop + "px";
    // boxDiv.style.transform = "rotate("+initialPosition+"deg)"
    // boxDiv.style.width = initialPosition + "px"
    // console.log(initialPosition)
    if(initialPositionLeft === 90){
        console.log("hello")
        clearInterval(animationInterval);
    }
}

let animationInterval = setInterval(animationBox, Math.floor((Math.random()*5)+Math.random(0,60)))


let boats = [
    { 
        name: "boat1",
        image: "image/greenboat.png",
        initialPositionLeft: 90,
        inintialPositionTop: 14,
    },
    { 
        name: "boat2",
        image: "image/yellowboat.png",
        initialPositionLeft: 92,
        inintialPositionTop: 16,
    },
    { 
        name: "boat3",
        image: "image/blueboat.png",
        initialPositionLeft: 94,
        inintialPositionTop: 18,
    },
    { 
        name: "boat4",
        image: "image/redboat.png",
        initialPositionLeft: 96,
        inintialPositionTop: 20,
    },
]





