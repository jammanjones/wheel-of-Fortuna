const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const sections = [
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
    "#6A0DAD",
    "#B8860B",
    "#8B0000",
    "#6A0DAD"
];

function drawWheel() {

    const center = 300;
    const radius = 280;
    const slice = (Math.PI * 2) / sections.length;

    ctx.clearRect(0, 0, 600, 600);

    for (let i = 0; i < sections.length; i++) {

        const start = i * slice;
        const end = start + slice;

        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, start, end);
        ctx.closePath();

        ctx.fillStyle = colors[i];
        ctx.fill();

ctx.strokeStyle = "#FFD700";
ctx.lineWidth = 3;
ctx.stroke();


// Draw label
ctx.save();

ctx.translate(center, center);

ctx.rotate(start + slice / 2);

ctx.textAlign = "right";
ctx.fillStyle = "white";
ctx.font = "bold 18px Arial";

const lines = sections[i].split("\n");

for (let j = 0; j < lines.length; j++) {

    ctx.fillText(
        lines[j],
        radius - 30,
        (j * 20) - ((lines.length - 1) * 10)
    );

}

ctx.restore();
    // Gold center
    ctx.beginPath();
    ctx.arc(center, center, 40, 0, Math.PI * 2);
    ctx.fillStyle = "#111";
    ctx.fill();

    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 6;
    ctx.stroke();
    // Draw label
ctx.save();

ctx.translate(center, center);

ctx.rotate(start + slice / 2);

ctx.textAlign = "right";
ctx.fillStyle = "white";
ctx.font = "bold 18px Arial";

const lines = sections[i].split("\n");

for (let j = 0; j < lines.length; j++) {

    ctx.fillText(
        lines[j],
        radius - 30,
        (j * 20) - ((lines.length - 1) * 10)
    );

}

ctx.restore();
}

drawWheel();