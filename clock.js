let hour = document.querySelector('.hour')
let minutes = document.querySelector('.minutes')
let second = document.querySelector('.second')

setInterval(() => {


  d = new Date();
  h = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();

  // formula for rotation

  hRotation = 30 * h + min / 2 + 0.0083;
  mRotation = 6 * min + 0.1 * sec;
  sRotation = 6 * sec;

  // styling
  
  hour.style.transform = `rotate(${hRotation}deg)`;
  minutes.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${sRotation}deg)`;

}, 1000);

