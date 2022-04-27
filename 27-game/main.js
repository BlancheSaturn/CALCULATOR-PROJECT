
// Thee four elements we need to manipulate our game



// const text = document.getElementById('heading');
// const strategy = document.querySelector('game__plan');
// const restartBtn = document.getElementById('game__restart');

// we have to define a few more variables to use in our function for cliking the boxes
const areas = []; // areas variable is an empty array
const playCircle = 'O'; //defining O and X as user need them for playing the game
const playX = 'X'; //defining O and X as user need them for playing the game
let currentPlayer = playCircle; // variable that set the currentPlayer to O at the start of the game

//  clickBox function takes the event as an argument.

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => { // Using forEach to add the eventlistener to multiple elements (my boxes on my page)
box.addEventListener('click', (event) => {
console.log('clicked button')
// Assigning a variable called clickBoxes, which will store the ID of the clicked box. 
// The event.target.id gives us the ID of the div.
 const clickBoxes = event.target.id;
// The !areas[checkBoxes] checks if the position is empty. When true, I assign the currentPlayer value to area.
// I assign the currentPlayer symbol which can be 'X' or 'O'
    if (!areas[clickBoxes]) {
      areas[clickBoxes] = currentPlayer;
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


  