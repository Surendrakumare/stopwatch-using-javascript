const btnStart = document.querySelector(".btn-start");
const btnPause = document.querySelector(".btn-pause");
const btnReset = document.querySelector(".btn-reset");

const hrs = document.querySelector(".hrs");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");
const milli = document.querySelector(".milli");

let timeReference = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let millisec = 0;
let int;

const update = () => {
  timeReference = Date.now() - eps;
  millisec = Math.floor(timeReference / 100) % 10;
  seconds = Math.floor((timeReference / 1000) % 60);
  minutes = Math.floor((timeReference / (1000 * 60)) % 60);
  hours = Math.floor((timeReference / (1000 * 60 * 60)) % 60);

  console.log(seconds);
  if (seconds <= 9) {
    secs.innerText = "0" + seconds;
  } else {
    secs.innerText = seconds;
  }

  if (hours <= 9) {
    hrs.innerText = "0" + hours;
  } else {
    hrs.innerText = hours;
  }

  if (minutes <= 9) {
    mins.innerText = "0" + minutes;
  } else {
    mins.innerText = minutes;
  }

  if (millisec <= 9) {
    milli.innerText = "0" + millisec;
  } else {
    milli.innerText = millisec;
  }
};

const start = () => {
  eps = Date.now();
  int = setInterval(update, 10);
};

const pause = () => clearInterval(int);

const reset = () => {
  clearInterval(int);
  hrs.innerText = "00";
  mins.innerText = "00";
  secs.innerText = "00";
  milli.innerText = "00";
};

btnStart.addEventListener("click", start);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);
