const hourHand = document.querySelector(".hour-hand") as HTMLElement;
const minuteHand = document.querySelector(".minute-hand") as HTMLElement;
const secondHand = document.querySelector(".second-hand") as HTMLElement;

const makeClockAlive = () => {
  const date = new Date();

  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = (date.getHours() + 24) % 12 || 12;
  console.log(hours, minutes, seconds);
  const secondsDegree = (seconds / 60) * 360;
  if (secondHand) secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  const minutesDegree = (minutes / 60) * 360;
  console.log(minutesDegree);
  if (minuteHand) minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  const hoursDegree = (hours / 12) * 360;
  if (hourHand) hourHand.style.transform = `rotate(${hoursDegree}deg)`;
};

setInterval(() => {
  makeClockAlive();
}, 1000);
