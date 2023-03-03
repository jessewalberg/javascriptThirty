"use strict";
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const makeClockAlive = () => {
    const date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getMinutes();
    const secondsDegree = (seconds / 60) * 360;
    console.log(secondHand);
    if (secondHand)
        secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    const minutesDegree = (minutes / 60) * 360;
    const hoursDegree = (minutes / 60) * 360;
};
setInterval(() => {
    makeClockAlive();
}, 1000);
