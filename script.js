// ================================
// Lady Fortuna v1.0
// Part 1 - Draw the Wheel
// ================================

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const spinButton = document.getElementById("spinButton");
const result = document.getElementById("result");

const decisions = [
    "Increase Bet",
    "Lower Bet",
    "Keep Same Bet\n(10 Spins)",
    "Change Denomination",
    "Change Machines",
    "Max Bet",
    "Min Bet",
    "20 Fast Spins\n(Min Bet)"
];

const colors = [
    "#8B0000",
    "#6A0DAD",
    "#B8860B",
    "#8B0000",
    "#8B0000",
    "#6A0DAD",
    "#B8860B",
    "#6A0DAD"
];

const CENTER = 300;
const RADIUS = 280;

function drawWheel() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const sliceAngle = (Math.PI * 2) / decisions.length;

    for (let i = 0; i < decisions.length; i++) {

        const start = i * sliceAngle - Math.PI / 2;
        const end = start + sliceAngle;

        // Draw slice
        ctx.beginPath();
        ctx.moveTo(CENTER, CENTER);
        ctx.arc(CENTER, CENTER, RADIUS, start, end);
        ctx.closePath();

        ctx.fillStyle = colors[i];
        ctx.fill();

        ctx.strokeStyle = "#FFD700";
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw text
        ctx.save();

        ctx.translate(CENTER, CENTER);
const angle = start + sliceAngle / 2;

ctx.rotate(angle);

// Keep text upright
if (angle > Math.PI / 2 && angle < Math.PI * 1.5) {
    ctx.rotate(Math.PI);
}
        ctx.fillStyle = "white";
        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const lines = decisions[i].split("\n");

        for (let j = 0; j < lines.length; j++) {

ctx.fillText(
    lines[j],
    180,                (j - (lines.length - 1) / 2) * 18
            );

        }

        ctx.restore();
    }

    // Gold center
    ctx.beginPath();
    ctx.arc(CENTER, CENTER, 45, 0, Math.PI * 2);
    ctx.fillStyle = "#111";
    ctx.fill();

    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.fillStyle = "#FFD700";
    ctx.font = "32px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("⚜", CENTER, CENTER);
}

drawWheel();