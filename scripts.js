/* Game Code */

/* Global Code */

// variable to keep track of whose turn it is
let currentTurn = "";

// Deciding who starts
let decideTurn = () => {
  let randomNumber = Math.floor(Math.random() * 2);
  console.log(randomNumber);

  if (randomNumber == 0) {
    currentTurn = "Red";
  } else {
    currentTurn = "Black";
  }

  document.getElementById("current-turn").innerText = currentTurn;
};

// changing turn
let changeTurn = (playerTurn) => {
  document.getElementById("current-turn").innerText = playerTurn;
};

/* Event handlers */

// Clear Buttons Handler is Clicked
document.getElementById("clear-tokens-button").addEventListener("click", function() {
  let tokens = document.querySelectorAll(".circle");

  for (let i = 0; i < tokens.length; i++) {
    tokens[i].style.backgroundColor = "white";
  }

  this.setAttribute("disabled", "true");
  document.getElementById("start-game-button").removeAttribute("disabled");
});

// Start Game Button Click handler

document.getElementById("start-game-button").addEventListener("click", function() {
  this.setAttribute("disabled", "true");
  document.getElementById("clear-tokens-button").removeAttribute("disabled");

  decideTurn();
});
