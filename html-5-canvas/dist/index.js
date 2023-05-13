"use strict";
const canvas = document.getElementById("draw");
const context = canvas.getContext("2d");
let hue = 0;
const width = canvas.width;
const height = canvas.height;
let painting = false;
function startPainting(event) {
    painting = true;
    draw(event);
}
function stopPainting() {
    painting = false;
    context.beginPath();
}
function draw(event) {
    if (!painting) {
        return;
    }
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.lineWidth = hue;
    context.lineCap = "round";
    context.lineTo(event.clientX, event.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(event.clientX, event.clientY);
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
}
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("mousemove", draw);
