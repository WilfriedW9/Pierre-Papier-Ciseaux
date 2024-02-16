const player = document.querySelector("#player");
const buttons = document.querySelectorAll("button");
const opponent = document.querySelector("#opponent");
const counter = document.querySelector("#counter");
const startBtn = document.querySelector("#startBtn");
const outcome = document.querySelector("#outcome");
const scoreBoard = document.querySelector("#scoreBoard");
const time = 2500;

const options = ["Rock", "Paper", "Scissors"];

let count = 3;
let score = 0;


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(score)
    const btnValue = button.attributes.value.value;
    player.innerText = btnValue;
  });
});

function oppChoices() {
  const oppChoice = options[Math.floor(Math.random() * 3)];

  setTimeout(() => {
    opponent.innerText = oppChoice;
    rules();
    scoreBoard.innerText = score
    console.log(score)
  }, time);
  
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


function rules() {
  if (
    (player.innerText == "Paper" && opponent.innerText == "Rock") ||
    (player.innerText == "Rock" && opponent.innerText == "Scissors") ||
    (player.innerText == "Scissors" && opponent.innerText == "Paper")
  ) {
    outcome.innerText = "You win !";
    score += 1
  } else if (
    (player.innerText == "Paper" && opponent.innerText == "Scissors") ||
    (player.innerText == "Rock" && opponent.innerText == "Paper") ||
    (player.innerText == "Scissors" && opponent.innerText == "Rock")
  ) {
    score -= 1
    outcome.innerText = "You loose !";
  } else {
    outcome.innerText = "Draw !";
  }
}



function startGame() {
  startClock();
  oppChoices();
}

startBtn.addEventListener("click", () => {
  startGame();
});
