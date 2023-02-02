let containerBox = document.getElementById("container")
let boxDiv = document.getElementById("animate")
let initialPositionLeft = 90;
let inintialPositionTop = 14
let animationInterval = setInterval(animationBox, Math.floor((Math.random()*5)+Math.random(0,60)))

function animationBox(){
    inintialPositionTop +=0.07
    initialPositionLeft -= 0.14
    boxDiv.style.left = initialPositionLeft + "vh";
    boxDiv.style.top = inintialPositionTop + "vh";
    // boxDiv.style.transform = "rotate("+initialPosition+"deg)"
    // boxDiv.style.width = initialPosition + "px"
    // console.log(initialPosition)
    if(initialPositionLeft < 5.6){
        console.log("hello")
        clearInterval(animationInterval);
    }
}









