const player = document.querySelector("#player");
const buttons = document.querySelectorAll("button");
const options = ["Rock", "Paper", "Scissors"];
const opponent = document.querySelector("#opponent");
const counter = document.querySelector("#counter");
const startBtn = document.querySelector("#startBtn");
const outcome = document.querySelector("#outcome");
console.log(outcome.innerText);
const time = 2500;
const win = 0
const loss = 0

let count = 3;
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnValue = button.attributes.value.value;
    player.innerText =  btnValue;
    console.log(btnValue);
    return btnValue;
  });
});

function oppChoices() {
  const oppChoice = options[Math.floor(Math.random() * 3)];

  setTimeout(() => {
    opponent.innerText = oppChoice;
    rules()
    console.log(player.innerText, opponent.innerText)
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

function rules(){
        if((player.innerText == "Paper" && opponent.innerText == "Rock") ||
        (player.innerText == "Rock" && opponent.innerText == "Scissors") ||
        (player.innerText == "Scissors" && opponent.innerText == "Paper")){
            outcome.innerText = "You win !"
            win += 1
        }else if ((player.innerText == "Paper" && opponent.innerText == "Scissors") ||
        (player.innerText == "Rock" && opponent.innerText == "Paper") ||
        (player.innerText == "Scissors" && opponent.innerText == "Rock")){
            outcome.innerText = "You loose !"
            loss += 1
        }else {
            outcome.innerText = "Draw !"
        }
}

function startGame() {
  
  startClock();
  oppChoices();
}

startBtn.addEventListener("click", () => {
  startGame();
});
