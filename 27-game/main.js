const boxes = document.querySelectorAll(".box");
const title = document.getElementById("title");
const resultMessage = document.getElementById("game__result-message");
const playerGoMsg = document.getElementById("playerTurn");

const container = [];
const playCircle = "O";
const playX = "X";
let currentPlayer = playCircle;


boxes.forEach((box) => {
  // used forEach access all the boxes
  box.addEventListener("click", (event) => {
    console.log("clicked button");

    if (gameOver) {
      return;
    }
    const clickBoxes = event.target.id; // takes the event as an argument.
    if (!container[clickBoxes]) {
      // checks if box is empty assign value to area
      container[clickBoxes] = currentPlayer;
      event.target.innerText = currentPlayer;
      //   calling the function gameWon
      if (gameWon()) {
        title.innerText = `Player ${currentPlayer} has won!`;
        //  calling function to restart our game. The return statement will take us out of the condition.
        playerGoMsg.innerText = ``;
        gameOver = true;
        restart();
        return;
      }
      // calling function gameDraw.
      if (gameDraw()) {
        playerGoMsg.innerText = ``;
        return;
      }
      // This piece of code is checking if the currentPlayer symbol is the circle, then we change it to "X", otherwise "O".
      currentPlayer = currentPlayer === playCircle ? playX : playCircle;
      playerGoMsg.innerText = `It's ${currentPlayer}'s turn`;
    }
  });
});


// gameWon function checks for the winning combinations on the game
// If a condition passes, then it shows the resultMessage on my game__result-message h2 using innerText
// then I am also returning true.
const gameWon = () => {
  if (container[0] === currentPlayer) {
    // constant index 0

    if (container[1] === currentPlayer && container[2] === currentPlayer) {
      resultMessage.innerText = `Congratulations!`;
      return true;
    }
    if (container[3] === currentPlayer && container[6] === currentPlayer) {
      resultMessage.innerText = `Nailed it!`;
      return true;
    }
    if (container[4] === currentPlayer && container[8] === currentPlayer) {
      resultMessage.innerText = `Way to go!`;
      return true;
    }
  }
  if (container[8] === currentPlayer) {
    // constant index 8

    if (container[2] === currentPlayer && container[5] === currentPlayer) {
      resultMessage.innerText = `Good Game!`;
      return true;
    }
    if (container[6] === currentPlayer && container[7] === currentPlayer) {
      resultMessage.innerText = `Hip Hip Hooray!`;
      return true;
    }
  }
  if (container[4] === currentPlayer) {
    // constant index 4

    if (container[1] === currentPlayer && container[7] === currentPlayer) {
      resultMessage.innerText = `Fantastic'!`;
      return true;
    }
    if (container[3] === currentPlayer && container[5] === currentPlayer) {
      resultMessage.innerText = `Well Done!`;
      return true;
    }
    if (container[2] === currentPlayer && container[6] === currentPlayer) {
      resultMessage.innerText = `Take a bow!`;
      return true;
    }
  }
};


// disableGame function, disable the rest of the boxes when the game is won.

let gameOver = false;
const disableBoxes = document.querySelectorAll(".box");
const disableGame = (_finish) => {
  if (gameOver) disableBoxes.forEach((box) => (box.disabled = true));
  return;
};

// gameDraw function. This function is checking to see if
// all the boxes are filled and no winning condition is met, then the match is a draw.

const gameDraw = () => {
  let draw = 0;
  container.forEach((_area, i) => {
    if (container[i] !== null) draw++; // variable increment after each box is clicked.
  });
  if (draw === 9) { // if the counter becomes equal to 9, then we say that the match is drawn.
    title.innerText = `Game ended in a draw!`;
    playerGoMsg.innerText = ``;
    restart();
    return true;
  }
};

// restart function. 
// The setTimeout function waits for a defined amount of time and then executes whatever function is created inside it.
// The 20000 at the end will make sure that this function executes after 20 second.

const restart = () => {
  setTimeout(() => {
    container.forEach((_area, i) => {
      container[i] = null;
    });
    boxes.forEach((box) => {
      box.innerText = "";
    });
    title.innerText = `Tic Tac Toe`;
    resultMessage.innerText = ``;
    playerGoMsg.innerHTML = ``;
  }, 10000);
};


