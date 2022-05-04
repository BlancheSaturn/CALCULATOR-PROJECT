Tic tac toe (or noughts and crosses)
How this game is played

The rules of the game are as follows.
* There is a 9×9 grid or flex boxes
* One player is X, the other is O
* Each player must attempt to line up 3 of their counters (X or O) in a line
* The line can be in any direction; vertical, horizontal or diagonal

O	X	O
	O	X
O	X	
Both input has to be placed by user:
Player 1 (O)
Player 2 (x) 

How I Implemented the game:

I access these four elements box, game__title, game__result-message and playerTurn that I need to manipulate the game through the DOM.

I have to define a few variables to use in our function
Container variable is an empty array
Defined O and X as user need them for playing the game
The defined a variable that set the currentPlayer to O at the start of the game

ADD EVENTLISTENER:

    I then added an eventlistener to listen for the clicks on of my boxes
    Using forEach to add the eventlistener to multiple elements 

    Assigned a variable called clickBoxes (takes the event as an argument.), which will store the ID of the clicked box.
    The event.target.id gives us the ID of the div.

    The !container[checkBoxes] checks if the position is empty. When true, I assign the currentPlayer value to area.
    I assign the currentPlayer symbol which can be 'X' or 'O'

    Called the function gameWon inside the if statement, if the function returns true then we change the heading
    innerText depending on which player has won. I also called the restart function here, so the game can restart when the timer is completed

    I also called the gameDraw function

    The last piece of code within this function is checking if the currentPlayer symbol is the circle, then we change it to "X", otherwise "O".
    I used a ternary operator here to assign a new player. This operator is an alternative to an if...else statement.


GAMEWON FUNCTION:
    gameWon function is checking for the winning combinations on the game
    If a condition passes, then I am showing the resultMessage on my game__result-message h2 using innerText
    then we are returning true. The return true value is important, on the eventListener function,
    we wait for the return value in our conditional statement.

    Possible winning combinations:
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    In these combination index 0 is the common index and the possible combinations will be
    0, 1 and 2
    0, 3 and 6
    0, 4 and 8

    Here index position 8 is the common index and the possible combinations will be
    2,5 and 8
    6,7 and 8
    0,4 and 8 is already covered

    Here for the index position 4, the combinations are
    2, 4 and 6
    1, 4 and 7
    3, 4 and 5

DISABLEGAME FUNCTION:

    disableGame function, disable the rest of the boxes when the game is won.
    Setting the diable boxes to false when it true the boxes are disables.
    I called this function within the gameWon if statement in the eventlistener function. 

GAMEDRAW FUNCTION:

    gameDraw function. This function is checking to see if all the boxes are filled and no winning condition is met, then the match is a draw.
    I am using a different approach for this function. I am using a variable that will increment after each box is clicked.
    We have 8 boxes in total, if the counter becomes equal to 8, then we say that the match is drawn.


RESTART FUNCTION:
    
    I've placed all the code inside the function into a setTimeout method.
    The setTimeout function waits for a defined amount of time and then executes whatever function is created inside it.
    I assigned all the container with a null value. This is done using a forEach loop here.
    Change all the boxes values to blank, this is also done using a forEach loop. changing the title to original and reset resultMessage and playerGoMsg text to blank.
    The 20000 at the end will make sure that this function executes after 20 second.






RESTART BUTTON: 

    If you want to restart the game with a button tgis piece of code should do it, 
    I removed it from the game as my setTimeout function interferes with the restart button.
    I selected to go with only the setTimeout function instead of both.

    restartButton function for the restart button, when click reset our boxes to null and clear the boxes
    reset out title and result message.

    const restartBotton = document.getElementById("game__restart");
    restartBotton.addEventListener("click", () => {
    console.log('clicked restart')
    boxes.forEach((box) => {
        box.innerText = "";
    });
    title.innerText = `Tic Tac Toe`;
    resultMessage.innerText = ``
    playerGoMsg.innerHTML = ``;
    gameOver = false;
    })