console.log("starter");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector("second-hand");

const makeClockAlive = () => {
  const date = new Date();

  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  console.log(seconds, minutes, hours);

  // Just a small commit to make sure I am committing something everyday and staying on track
  // Its been a long day with the wife and kids
  // Next I will have to associate 360 degrees with the seconds minutes and hours.
};

setInterval(() => {
  makeClockAlive();
}, 1000);
