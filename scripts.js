/* Game Code */

/* Global Code */

// variable to keep track of whose turn it is
let currentTurn = "";

// board
// Rules:
// 1. 'C' no chip but cannot be modified
// 2. 'O' no chip but can be modified
// 3. 'R' Red chip and cannot be modified
// 4. 'B' Black chip and cannot be modified
let board = [
  /* 1st column */["O", "C", "C", "C", "C", "C"],
  /* 2nd column */["O", "C", "C", "C", "C", "C"],
  /* 3rd column */["O", "C", "C", "C", "C", "C"],
  /* 4th column */["O", "C", "C", "C", "C", "C"],
  /* 5th column */["O", "C", "C", "C", "C", "C"],
  /* 6th column */["O", "C", "C", "C", "C", "C"],
  /* 7th column */["O", "C", "C", "C", "C", "C"],
];

// all circles
let circles = document.querySelectorAll(".circle");


// Deciding who starts
let decideTurn = () => {
  let randomNumber = Math.floor(Math.random() * 2);
  // console.log(randomNumber);

  if (randomNumber == 0) {
    currentTurn = "Red";
  } else {
    currentTurn = "Black";
  }

  document.getElementById("current-turn").innerText = currentTurn;
};

// changing turn
let changeTurn = () => {
  if (currentTurn === "Red") {
    currentTurn = "Black";
  } else if (currentTurn === "Black") {
    currentTurn = "Red";
  }

  document.getElementById("current-turn").innerText = currentTurn;
};

// iterate board
let iterateBoard = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      console.log("At Position " + i + " " + j + ": " + board[i][j]);
      // circles[i + j].setAttribute("id", i + "-" + j);
      console.log(circles);
    }
  }
};

// disable tiles
let disableTiles = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "C") {
        for (let k = 0; k < circles.length; k++) {
          if (circles[k].getAttribute("id") === (i + "" + j)) {
            circles[k].classList += " greyedOut";
          } // circles if
        } // k loop
      } // board if
    } // j loop
  } // i loop
};

// clear tokens
let clear = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (j === 0) {
        board[i][j] = "O";
      } else {
        board[i][j] = "C";
      }
    }
  }
};

// enable tile in the 2D-array 'board'
let enableTile = () => {
  let changedTiles = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== "O" && board[i][j] !== "C") {
        if (board[i][j + 1] == "C") {
          board[i][j + 1] = "O";
          changedTiles++;
        } // board[i][j + 1] if
      } // board[i][j] if
    } // j loop
  } // i loop

  if (changedTiles > 0) {
    return true;
  } else {
    return false;
  }
};

// change tile board based off of change in board
let changeTileBoard = () => {
  if (enableTile()) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] == "O") {
          for (let k = 0; k < circles.length; k++) {
            if (circles[k].getAttribute("id") == (i + "" + j)) {
              // console.log((i + "" + j));
              circles[k].setAttribute("class", "circle");
            } // circles[k] if
          } // k loop
        } // board[i][j] if
      } // j loop
    } // i loop
  } // enableTile() if

  console.log(board);
};

// WINNING CONDITIONS

// helper function
let changeContainerHTML = (color) => {
  document.querySelector(".container").innerHTML = "<h2> " + color + " Wins</h2>";
};

// win horizontally
let horizontalWin = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // check for red
      if ((i < 4) && (board[i][j] === "R") && (board[i + 1][j] === "R") && (board[i + 2][j] === "R") && (board[i + 3][j] === "R")) {
        setTimeout(changeContainerHTML, 500, "Red");
      } else if ((i < 4) && (board[i][j] === "B") && (board[i + 1][j] === "B") && (board[i + 2][j] === "B") && (board[i + 3][j] === "B")) {
        setTimeout(changeContainerHTML, 500, "Black");
      }// board[i][j] if
    } // j loop
  } // i loop

};

// win vertically
let verticalWin = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if ((j < 4) && (board[i][j] === "R") && (board[i][j + 1] === "R") && (board[i][j + 2] === "R") && (board[i][j + 3] === "R")) {
        setTimeout(changeContainerHTML, 500, "Red");
      } else if ((j < 4) && (board[i][j] === "B") && (board[i][j + 1] === "B") && (board[i][j + 2] === "B") && (board[i][j + 3] === "B")) {
        setTimeout(changeContainerHTML, 500, "Black");
      } // else if
    } // j loop
  } // i loop
};

// win diagonally

let diagonalWin1 = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if ((i < 4) && (j < 4) && (board[i][j] === "R") && (board[i + 1][j + 1] === "R") && (board[i + 2][j + 2] === "R") && (board[i + 3][j + 3] === "R")) {
        setTimeout(changeContainerHTML, 500, "Red");
      } else if ((i < 4) && (j < 4) && (board[i][j] === "B") && (board[i + 1][j + 1] === "B") && (board[i + 2][j + 2] === "B") && (board[i + 3][j + 3] === "B")) {
        setTimeout(changeContainerHTML, 500, "Black");
      } // else if
    } // j loop
  } // i loop
};

let diagonalWin2 = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if ((i > 2) && (j < 4) && (board[i][j] === "R") && (board[i - 1][j + 1] === "R") && (board[i - 2][j + 2] === "R") && (board[i - 3][j + 3] === "R")) {
        setTimeout(changeContainerHTML, 500, "Red");
      } else if ((i > 2) && (j < 4) && (board[i][j] === "B") && (board[i - 1][j + 1] === "B") && (board[i - 2][j + 2] === "B") && (board[i - 3][j + 3] === "B")) {
        setTimeout(changeContainerHTML, 500, "Black");
      } // else if
    } // j loop
  } // i loop
};

/* Event handlers */

// Clear Buttons Handler is Clicked
document.getElementById("clear-tokens-button").addEventListener("click", function() {
  window.location.reload();

  this.setAttribute("disabled", "true");
  document.getElementById("start-game-button").removeAttribute("disabled");
});

// Start Game Button Click handler

document.getElementById("start-game-button").addEventListener("click", function() {
  this.setAttribute("disabled", "true");
  document.getElementById("clear-tokens-button").removeAttribute("disabled");

  // decide starting player
  decideTurn();

  // disable tiles that cannot be placed on
  disableTiles();
});

// click handler when a tile is clicked

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", function() {
    if (currentTurn === "Red" && !(this.classList.contains("greyedOut"))) {
      this.style.backgroundColor = "red";
      changeTurn();
      // console.log("board[" + this.getAttribute("id")[0] + "][" + this.getAttribute("id")[1] + "] changed to 'R'");
      board[this.getAttribute("id")[0]][this.getAttribute("id")[1]] = "R";

      // call function to remove greyedOut class from a tile
      changeTileBoard();
      // check horizontal win condition
      horizontalWin();
      // check vertical win condition
      verticalWin();
      // // check diagonal win
      diagonalWin1();
      diagonalWin2();

    } else if (currentTurn === "Black" && !(this.classList.contains("greyedOut"))) {
      this.style.backgroundColor = "black";
      changeTurn();
      // console.log("board[" + this.getAttribute("id")[0] + "][" + this.getAttribute("id")[1] + "] changed to 'B'");
      board[this.getAttribute("id")[0]][this.getAttribute("id")[1]] = "B";

      // call function to remove greyedOut class from a tile
      changeTileBoard();
      // check horizontal win condition
      horizontalWin();
      // check vertical win condition
      verticalWin();
      // // check diagonal win
      diagonalWin1();
      diagonalWin2();
    }

    // console.log(this.getAttribute("id"));
  });
}
