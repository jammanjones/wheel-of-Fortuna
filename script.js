const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");

let currentRotation = 0;

spinButton.addEventListener("click", spinWheel);

function spinWheel(){

    spinButton.disabled = true;

    let randomSpin = Math.floor(Math.random() * 360) + 1440;

    currentRotation += randomSpin;

    wheel.style.transition = "transform 4s ease-out";

    wheel.style.transform = 
    `rotate(${currentRotation}deg)`;


    setTimeout(() => {

        spinButton.disabled = false;

    },4000);

}
