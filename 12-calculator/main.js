/* ***************************************************************
 * created a calculator object to hold everything that is required to construct a valid expression
 * I need to track some things in other to complete a valid arithmetic expression.
 **********************************************************************************************
 */
const calculator = {
  // this holds the string value (what user inputted or the result of a completed calculation). Tracks what is showns on screen
  showValue: "0",
  // this holds the result of the previous operation in the calculator
  previousOperand: null,
  // checks if both the previous operation and the operator are inputted, if true the next numbers inputted will be the current operand
  checkingForCurrentOperand: false,
  // stores the operator for an expression.
  operator: null,
};

/*******************************************************************************************************
* Created this function for the content of the showValue property
// which is one of the property in the calculator object to be shown on screen.
// Anytime a calculation is done we call this function to show the content of the showValue property
*******************************************************************************************************
*/
const updateResult = (result) => {
  const display = document.querySelector(".calculator-result");
  display.value = calculator.showValue;
};
updateResult();

// created this function so I can listen for clicks on
// the calculator keys and determine what type of key was clicked.
// We have these set of buttons on the calculator (calculator__operator, calculator__percent,
// calculator__plus-minus,calculator__square-root,calcultor__digit, calculator__decimal,calculator__all-clear, equal-sign)

// Check if the clicked element is a button.
// If not, exit from the function
// the querySelector() returns the first element that matches a CSS selector
const keys = document.querySelector(".calculator__buttons");
keys.addEventListener("click", (event) => {
  // keys.innerHTML = 'Clicked'
  // accessing the clicked element
  const target = event.target;
  // Looking to see  if the clicked element is a button.
  // If it not a button, exit from the function
  if (!target.matches("button")) {
    return;
  }

  //  Using classList.contains to returns true if the calculator click contains the button we're listening for, otherwise false
  if (event.target.classList.contains("operator")) {
    controlOperator(target.value);
    updateResult();
    return;
  } else if (event.target.classList.contains("calculator__percent")) {
    // added the console to see whether I have an output on the dev tool when I click on the buttons
    console.log("calculator__percent", target.value);
    return;
  } else if (event.target.classList.contains("calculator__plus-minus")) {
    console.log("calculator__plus-minus", target.value);
    return;
  } else if (event.target.classList.contains("calculator__square-root")) {
    console.log("calculator__square-root", target.value);
    return;
  } else if (event.target.classList.contains("calculator__decimal")) {
    insertDecimal(target.value);
    updateResult();
    return;
  } else if (event.target.classList.contains("calculator__all-clear")) {
    console.log("calculator__all-clear", target.value);
    return;
    // updateResult function is invoked so that the new contents of the showValue
    // property is shown on the screen after each number button is clicked.
  } else clickDigit(target.value);
  updateResult();
});

/****************************************************************************************
 *When the decimal point key is clicked on the calculator, I have to add a decimal point to whatever is
 *shown on the screen except if it already has a decimal point.
 *In insertDecimal function, I used the includes() method  to check if shownValue
 *has a decimal point. If true, a decimal is added to the number.
 *****************************************************************************************
 */

const insertDecimal = (decimal) => {
  const addDecimal = document.getElementById("calculator__decimal");
  // checking to see if the `showValue` property of the calulator object does not contain a decimal point
  if (!calculator.showValue.includes(decimal)) {
    // Add the decimal point
    return (calculator.showValue += decimal);
  }
};

/*
// The showValue property of the calculator object represents the input of the user,
// Creating a function clickDigit to make the digit (numbers) buttons work so that when I click on them,
// the value of the clicked button is shown on the screen.

// checkingForSecondOperand property is set to true, the showValue property
//  is replace with the number that was clicked. Else it will 
//  replace or add to showValue as appropriate.
*/
const clickDigit = (digit) => {
  // make {showValue} to string
  const { showValue, checkingForCurrentOperand } = calculator;
  if (checkingForCurrentOperand === true) {
    calculator.showValue = digit;
    calculator.checkingForCurrentOperand = false;
    // Replace`showValue` with clicked number if the current value is '0' otherwise add to it through string concatenation
    // (?) is used to check if the current value shown on the calculator is zero.
    // When true, calculator.showValue is overwritten with whatever digit was clicked.
  } else {
    calculator.showValue = showValue === "0" ? digit : showValue + digit;
  }
  console.log(calculator);
};

/**********************************************************************************************************
This function controlOperator is to get the operators (+, −, ⨉, ÷, =) on the calculator to work. 
Operator button is clicked, the input of showValue is converted to a floating-point number 
and the result is stored in the previousOperand property.

The operator property is also set to whatever operator key was clicked, while 
checkingForSecondOperand is set to true which shows that the previous operand has been entered 
and whatever number the user enters next will be the current operand.
***********************************************************************************************************
*/

const controlOperator = (nextOperator) => {
  // accessing the properties of the object by extracting them from object calculator and combine them to variables.
  // Destructing the objects like below is better because neither the property names nor the object variable is duplicated.
  // you can read multiple properties from the same object in just one statement
  const { previousOperand, showValue, operator } = calculator;
  // parseFloat converts the string contents of showValue
  // to a floating-point number
  const keyInValue = parseFloat(showValue);
  // confirm that previousOperand is null and that the keyInValue
  // is not a NaN value (NaN: NotaNumber)
  if (previousOperand === null && !isNaN(keyInValue)) {
    // Update the previousOperand property
    return (calculator.previousOperand = keyInValue);
    // checks if the operator property has been assigned an operator.
    // If yes, the calculateResult function is invoked and the sum is saved in the calculation variable.
  } else if (operator) {
    const calculation = calculateResult(previousOperand, keyInValue, operator);
    // The sum is  shown by updating the showValue property.
    calculator.showValue = String(calculation);
    // The value of previousOperand is updated to the result so that it may be used in the next calculation.
    calculator.previousOperand = calculation;
  }
  calculator.checkingForCurrentOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
};

/*
calculateResult function takes the previous operand, current operand and operator as arguments and checks 
the value of the operator to determine how the expression should be assessed. 
If the operator is =, the current operand will be returned as is.
*/
const calculateResult = (previousOperand, currentOperand, operator) => {
  if (operator === "+") {
    return previousOperand + currentOperand;
  } else if (operator === "-") {
    return previousOperand - currentOperand;
  } else if (operator === "*") {
    return previousOperand * currentOperand;
  } else if (operator === "/") {
    return previousOperand / currentOperand;
  }

  return currentOperand;
};
