const player = document.querySelector("#player");
const buttons = document.querySelectorAll("button");
const options = ["Pierre", "Papier", "Ciseaux"];
const opponent = document.querySelector("#opponent");
const counter = document.querySelector("#counter");
const startBtn = document.querySelector("#startBtn");
const outcome = document.querySelector("#outcome");
outcome.innerText = "Allo"
console.log(outcome.innerText);
const time = 2500;

let count = 3;
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnValue = button.attributes.value.value;
    player.innerText = btnValue;
    console.log(btnValue);
    return btnValue;
  });
});

function oppChoices() {
  const oppChoice = options[Math.floor(Math.random() * 3)];

  setTimeout(() => {
    opponent.innerText = oppChoice;
  }, time);

  return oppChoice;
}

function startClock() {
  let clock = setInterval(() => {
    counter.innerText = count;
    count--;

    if (count < 0) {
      clearInterval(clock);
      count = 3;
    }
  }, time / 4);
}

function startGame() {
  startClock();
  oppChoices();
}

startBtn.addEventListener("click", () => {
  startGame();
});
