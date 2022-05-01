// The four elements box, game__title, game__result-message and game_restart I need to manipulate the game
// Acceing access the DOM for these elements
const boxes = document.querySelectorAll(".box");
const title = document.getElementById("game__title");
const resultMessage = document.getElementById("game__result-message");
const playerGoMsg = document.getElementById("playerTurn");


// I have to define a few variables to use in our function
const container = []; // container variable is an empty array
const playCircle = "O"; //defining O and X as user need them for playing the game
const playX = "X"; //defining O and X as user need them for playing the game
let currentPlayer = playCircle; // variable that set the currentPlayer to O at the start of the game

//  clickBoxes function takes the event as an argument.
boxes.forEach((box) => {
  // Using forEach to add the eventlistener to multiple elements (my boxes on my page)
  box.addEventListener("click", (event) => {
    console.log("clicked button");
    // Assigning a variable called clickBoxes, which will store the ID of the clicked box.
    // The event.target.id gives us the ID of the div.
    const clickBoxes = event.target.id;
    // The !container[checkBoxes] checks if the position is empty. When true, I assign the currentPlayer value to area.
    // I assign the currentPlayer symbol which can be 'X' or 'O'
    if (!container[clickBoxes]) {
      container[clickBoxes] = currentPlayer;
      event.target.innerText = currentPlayer;
      //   calling the function gameWon inside the if statement, if the function returns true then we change the heading
      //  innerText depending on which player has won.
      if (gameWon()) {
        title.innerText = `Player ${currentPlayer} has won!`;
        //  calling function to restart our game. The return statement will take us out of the condition.
        playerGoMsg.innerHTML = ``;
        disableGame();
        restart();
        return;
      }
      // calling function gameDraw.
      if (gameDraw()) {
        // playerGoMsg.innerHTML = ``; //ISSUE
        return;
      }
      // Function to change the currentPlayer depending on the last symbol.
      // It is checking if the currentPlayer symbol is the circle, then we change it to "X", otherwise "O".
      // We are using a ternary operator here to assign a new player,
      //  This operator is an alternative to an if...else statement.
      currentPlayer = currentPlayer === playCircle ? playX : playCircle;
      playerGoMsg.innerHTML = `It's ${currentPlayer}'s turn`;
    }
  });
});

// Need a function for the combination that can win the game
// gameWon function will check for the winning combinations on the game
// I am checking each of the conditions that for the winning combinations
// If a condition passes, then I are showing the resultMessage on my game__result-message h2 using innerText
// then we are returning true. The return true value is important, on §the clickBoxes function,
// we wait for the return value in our conditional statement.

//   Possible winning combinations:
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]

// In these combination index 0 is the common index and the possible combinations will be
// 0, 1 and 2
// 0, 3 and 6
// 0, 4 and 8

// Here index position 8 is the common index and the possible combinations will be
// 2,5 and 8
// 6,7 and 8
// 0,4 and 8 is already covered

// Here for the index position 4, the combinations are
// 2, 4 and 6
// 1, 4 and 7
// 3, 4 and 5


const gameWon = () => {
  if (container[0] === currentPlayer) { // constant index 0
    
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
  if (container[8] === currentPlayer) { // constant index 8
    
    if (container[2] === currentPlayer && container[5] === currentPlayer) {
      resultMessage.innerText = `Good Game!`;
      return true;
    }
    if (container[6] === currentPlayer && container[7] === currentPlayer) {
      resultMessage.innerText = `Hip Hip Hooray!`;
      return true;
    }
  }
  if (container[4] === currentPlayer) {// constant index 4
    
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
// ISSUE - I NEED TO DISABLE CONTAINER WHEN A GAME IS WON??? disable container Function
const disableGame = () => {
  document.querySelectorAll('.box').forEach(box => boxes.disabled = true);
  // boxes.forEach((box) => {
  // if (title.innerText = `Player ${currentPlayer} has won!`)
  // document.querySelectorAll(".box").diabled = true;
  // })
}
// gameDraw function. This function is checking to see if 
// all the boxes are filled and no winning condition is met, then the match is a draw. 
// I am using a different approach for this function. I am using a variable that will increment after each box is clicked. 
// Because we have 8 boxes in total, if the counter becomes equal to 8, then we say that the match is drawn.

const gameDraw = () => {
  let draw = 0;
  container.forEach((area, i) => {
    if (container[i] !== null) draw++;
  });
  if (draw === 9) {
    title.innerText = `Game ended in a draw!`;
    playerGoMsg.innerHTML = ``; //ISSUE
    restart();
  }
};

// restart function. I am putting all the code inside the function into a setTimeout method. 
// The setTimeout function waits for a defined amount of time and then executes whatever function is created inside it. 
// I assign all the container with a null value. This is done using a forEach loop here.
// Change all the boxes values to blank, this is also done using a forEach loop. changing the title  
// to original and reset resultMessage and playerGoMsg text to blank. 
// The 1000 at the end will make sure that this function executes after one second.

const restart = () => {
  setTimeout(() => {
    container.forEach((area, i) => {
      container[i] = null;
    });
    boxes.forEach((box) => {
      box.innerText = "";
    });
    title.innerText = `Tic Tac Toe`;
    resultMessage.innerText = ``;
    playerGoMsg.innerHTML = ``;
  }, 4000);
};

// restartButton function for the restart button, when click reset our boxes to null and clear the boxes
// reset out title and result message. 

// Issues when I clicked restart button, i think it waiting for my setTimeout seconds to 
// finish b4 I can play game properly again 
const restartBotton = document.getElementById("game__restart");
restartBotton.addEventListener("click", () => {
console.log('clicked restart')
boxes.forEach((box) => {
    box.innerText = "";
  });
  title.innerText = `Tic Tac Toe`;
  resultMessage.innerText = ``
  playerGoMsg.innerHTML = ``;
})




