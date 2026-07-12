// ==========================================
// Lady Fortuna v1.0
// Part 1
// ==========================================

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const spinButton = document.getElementById("spinButton");
const result = document.getElementById("result");

const decisions = [
    {
        title: "Increase Bet",
        message: "Fortune favors the bold."
    },
    {
        title: "Lower Bet",
        message: "Protect your bankroll."
    },
    {
        title: "Keep Same Bet\n(10 Spins)",
        message: "Stay the course."
    },
    {
        title: "Change Denomination",
        message: "A different path may reward you."
    },
    {
        title: "Change Machines",
        message: "Seek a fresh opportunity."
    },
    {
        title: "Max Bet",
        message: "Lady Fortuna smiles upon courage."
    },
    {
        title: "Min Bet",
        message: "Patience often wins."
    },
    {
        title: "20 Fast Spins\n(Min Bet)",
        message: "Let fate reveal itself quickly."
    }
];

const colors = [
    "#8B0000",
    "#6A0DAD",
    "#B8860B",
    "#8B0000",
    "#6A0DAD",
    "#B8860B",
    "#8B0000",
    "#6A0DAD"
];

const CENTER = 300;
const RADIUS = 280;

let rotation = 0;
let speed = 0;
let spinning = false;

function drawWheel() {

    ctx.clearRect(0,0,600,600);

    ctx.save();

    ctx.translate(CENTER,CENTER);
    ctx.rotate(rotation);
    ctx.translate(-CENTER,-CENTER);

    const slice = (Math.PI*2)/decisions.length;

    for(let i=0;i<decisions.length;i++){

        const start=i*slice-Math.PI/2;
        const end=start+slice;

        ctx.beginPath();
        ctx.moveTo(CENTER,CENTER);
        ctx.arc(CENTER,CENTER,RADIUS,start,end);
        ctx.closePath();

        ctx.fillStyle=colors[i];
        ctx.fill();

        ctx.strokeStyle="#FFD700";
        ctx.lineWidth=3;
        ctx.stroke();

        ctx.save();

        ctx.translate(CENTER,CENTER);
        ctx.rotate(start+slice/2);

        ctx.fillStyle="white";
        ctx.font="bold 16px Arial";
        ctx.textAlign="center";
        ctx.textBaseline="middle";

        const lines=decisions[i].title.split("\n");

        for(let j=0;j<lines.length;j++){

            ctx.fillText(
                lines[j],
                RADIUS-90,
                (j-(lines.length-1)/2)*18
            );

        }

        ctx.restore();

    }

    ctx.beginPath();
    ctx.arc(CENTER,CENTER,45,0,Math.PI*2);
    ctx.fillStyle="#111";
    ctx.fill();

    ctx.strokeStyle="#FFD700";
    ctx.lineWidth=6;
    ctx.stroke();

    ctx.fillStyle="#FFD700";
    ctx.font="32px serif";
    ctx.textAlign="center";
    ctx.textBaseline="middle";
    ctx.fillText("⚜",CENTER,CENTER);

    ctx.restore();
}

function getWinningIndex() {

    const slice = (Math.PI * 2) / decisions.length;

    let adjustedRotation = rotation % (Math.PI * 2);

    if (adjustedRotation < 0) {
        adjustedRotation += Math.PI * 2;
    }

    // Pointer is fixed at the top
    let pointerAngle = (Math.PI * 2 - adjustedRotation) % (Math.PI * 2);

    return Math.floor(pointerAngle / slice);
}

function showResult(index) {

    result.innerHTML = `
        <h2>⚜ Lady Fortuna Has Spoken ⚜</h2>
        <h3>${decisions[index].title.replace("\n","<br>")}</h3>
        <p>${decisions[index].message}</p>
        <hr>
        <small>For entertainment purposes only. Slot outcomes are random.</small>
    `;

}

function animate() {

    if (!spinning) return;

    rotation += speed;

    speed *= 0.985;

    drawWheel();

    if (speed < 0.002) {

        spinning = false;

        spinButton.disabled = false;

        const winner = getWinningIndex();

console.log("Winner index:", winner);
showResult(winner);
        return;

    }

    requestAnimationFrame(animate);

}

spinButton.addEventListener("click", () => {

    if (spinning) return;

    spinning = true;

    spinButton.disabled = true;

    result.innerHTML = "⚜ Lady Fortuna is deciding...";

    // Random starting speed
    speed = 0.35 + Math.random() * 0.15;

    requestAnimationFrame(animate);

});

drawWheel();