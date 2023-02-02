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
    if(initialPositionLeft === 40){
        console.log("hello")
        clearInterval(animationInterval);
    }
}

let animationInterval = setInterval(animationBox, Math.floor((Math.random()*5)+Math.random(0,60)))








