const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");

let currentRotation = 0;
const decisions = [

{
name: "Increase Bet",
message: "Fortuna invites you to consider a higher wager."
},

{
name: "Lower Bet",
message: "Protect your treasury and consider a smaller wager."
},

{
name: "Keep Same Bet (10 Spins)",
message: "Remain steady and continue for ten spins."
},

{
name: "Change Denomination",
message: "A different path may bring a new perspective."
},

{
name: "Change Machines",
message: "Fortuna calls you to seek a different machine."
},

{
name: "Max Bet",
message: "A bold move awaits those who choose it."
},

{
name: "Min Bet",
message: "Patience and caution have their place."
},

{
name: "20 Fast Spins (Min Bet)",
message: "Spin swiftly with a cautious approach."
}

];
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

    showDecision();

},4000);
}
function showDecision(){

    let sliceSize = 360 / decisions.length;

    let normalizedRotation = currentRotation % 360;

    let selectedIndex = Math.floor(
        ((360 - normalizedRotation) % 360) / sliceSize
    );


    let choice = decisions[selectedIndex];


    document.getElementById("result").innerHTML =

    `
    ⚜ Lady Fortuna Has Spoken ⚜
    <br><br>
    <strong>${choice.name}</strong>
    <br><br>
    ${choice.message}
    `;

}