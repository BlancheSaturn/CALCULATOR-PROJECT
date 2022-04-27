
// The four elements box, game__title, game__result and game_restart I need to manipulate the game
// Acceing access the DOM for these elements
const boxes = document.querySelectorAll('.box');
const text = document.getElementById('game__title');
const strategy = document.querySelector('game__result');
const restartBtn = document.getElementById('game__restart');

// we have to define a few more variables to use in our function for cliking the boxes
const container = []; // container variable is an empty array
const playCircle = 'O'; //defining O and X as user need them for playing the game
const playX = 'X'; //defining O and X as user need them for playing the game
let currentPlayer = playCircle; // variable that set the currentPlayer to O at the start of the game

//  clickBox function takes the event as an argument.


boxes.forEach(box => { // Using forEach to add the eventlistener to multiple elements (my boxes on my page)
box.addEventListener('click', (event) => {
console.log('clicked button')
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
        text.innerText = `${currentPlayer} has won!`;
    //  calling function to restart our game. The return statement will take us out of the condition.
        restart();
        return;
      }
    //  Similarly, we also check depending on another function called gameDraw.
      if (gameDraw()) {
        return;
      }
    // Changing the currentPlayer symbol depending on the last symbol. 
    // It is checking if the currentPlayer symbol is the circle, then we change it to "X", otherwise "O".
      currentPlayer = currentPlayer === playCircle ? playX : playCircle;
    }
})
  });

// Need a function for the combination that can win the game
// gameWon function will check for the winning combinations on the game 
// I am checking each of the conditions that for the winning combinations
// If a condition passes, then I are showing the result on my game__result h2 using innerText
// then we are returning true. The return true value is important, on the clickBoxes function,
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

// for these winning combinations index 0 is the constant index. Then we can check if the player is also on index
// 0, 1 and 2
// 0, 3 and 6
// 0, 4 and 8

  const gameWon = () => {
    if (container[0] === currentPlayer) {
      if (container[1] === currentPlayer && container[2] === currentPlayer) {
        game__result.innerText = `${currentPlayer} has won the game`;
        return true;
      }
    }
}




  // Need a function when the game is a draw 
//   const gameDraw = 



