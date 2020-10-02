// Start StopWatch

let sec = 0;
let part = 0;

const secEliment = document.getElementById("sec");
const partEliment = document.getElementById("part");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let secF;
let partF;

function secs() {
  sec++;
  sec < 10 ? (sec = `0${sec}`) : sec;
  secEliment.textContent = `${sec}s`;
}

function parts() {
  part++;
  part == 100 ? (part = 0) : part;
  part < 10 ? (part = `0${part}`) : part;
  partEliment.textContent = `${part}ms`;
}

function startTimer() {
  startBtn.setAttribute("disabled", "disabled");
  startBtn.textContent = "Continue";
  secF = setInterval(secs, 1000);
  partF = setInterval(parts, 10);
}

function stopTimer() {
  clearInterval(secF);
  clearInterval(partF);
  startBtn.removeAttribute("disabled");
}

function resetTimer() {
  sec = 0;
  part = 0;
  secEliment.textContent = `0${sec}s`;
  partEliment.textContent = `0${part}ms`;
  startBtn.removeAttribute("disabled");
  startBtn.textContent = "Start";
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// End StopWatch

// Star tTimer

const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("Seconds");

let minutes = minutesInput.value;
let seconds = secondsInput.value;

let plusMinutes;

const minutesEliment = document.getElementById("showminutes");
const secondsElimet = document.getElementById("showSeconds");

const staTimer = document.getElementById("startTimer");
const stoTimer = document.getElementById("stopTimer");
const conTimer = document.getElementById("continueTimer");

minutesEliment.textContent = minutes + "m";
secondsElimet.textContent = "0" + seconds + "s";

let secContinue;

function test() {
  if (seconds >= 60) {
    plusMinutes = Math.floor(seconds / 60);
    minutes = parseInt(minutes) + plusMinutes;
    seconds -= plusMinutes * 60;
  }
  seconds < 10 ? (seconds = `0${seconds}`) : seconds;
  secondsElimet.textContent = seconds + "s";
  minutesEliment.textContent = minutes + "m";
}

minutesInput.addEventListener("input", function () {
  minutes = minutesInput.value;
  minutesEliment.textContent = minutes + "m";
  staTimer.textContent = "Start Timer";
});

secondsInput.addEventListener("input", function () {
  seconds = secondsInput.value;
  staTimer.textContent = "Start Timer";
  test();
});

secondsInput.addEventListener("change", function () {
  secondsInput.value = seconds;
  minutesInput.value = minutes;
});

function timer() {
  if (minutes != 0) {
    staTimer.setAttribute("disabled", "disabled");
    secContinue = setInterval(function () {
      if (seconds == 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      minutesEliment.textContent = minutes + "m";
      seconds < 10 ? (seconds = `0${seconds}`) : seconds;
      secondsElimet.textContent = seconds + "s";
    }, 1000);
  }
}

function stopTime() {
  clearInterval(secContinue);
  staTimer.removeAttribute("disabled");
  staTimer.textContent = "Continue Timer";
}

staTimer.addEventListener("click", timer);
stoTimer.addEventListener("click", stopTime);
// End Timer

//  Start Tabing

const tabs = document.querySelectorAll("main nav ul li");
const content = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    content.forEach((cont) => {
      cont.classList.remove("active");
    });
    content[index].classList.add("active");
  });
});

// End Tabing
