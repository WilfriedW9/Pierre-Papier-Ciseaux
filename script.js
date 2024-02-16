const player = document.querySelector("#player");
const buttons = document.querySelectorAll("button");
const options = ["Pierre", "Papier", "Ciseaux"];
const opponent = document.querySelector("#opponent");
const counter = document.querySelector("#counter");
const startBtn = document.querySelector("#startBtn");
const outcome = document.querySelector("#outcome");
console.log(outcome.innerText);
const time = 2500;

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
        if((player.innerText == "Papier" && opponent.innerText == "Pierre") ||
        (player.innerText == "Pierre" && opponent.innerText == "Ciseaux") ||
        (player.innerText == "Ciseaux" && opponent.innerText == "Papier")){
            outcome.innerText = "You win !"
        }else if ((player.innerText == "Papier" && opponent.innerText == "Ciseaux") ||
        (player.innerText == "Pierre" && opponent.innerText == "Papier") ||
        (player.innerText == "Ciseaux" && opponent.innerText == "Pierre")){
            outcome.innerText = "You loose !"
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
