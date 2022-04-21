# CALCULATOR-PROJECT

CALCULATOR OBJECT
 * created a calculator object to hold everything that is required to construct a valid expression
 * I need to track some things in other to complete a valid arithmetic expression.

UPDATESCREEN FUNCTION 
 * function updateScreen for the content of the showValue property
 * which is one of the property in the calculator object to be shown on screen.
 * Anytime a calculation is done we call this function to show the content of the showValue property

 * Updating my updateScreen so when the calculator produce an invalid value
 * there will be an alert message instead of Infinity or Not a number shown on calculator and it will also reset the calculator.
 * The Number.isFinite method identifies whether the value is a finite (countable) number.
 * If it's not, an alert below is seen.
 

 EVENTLISTENER FUNCTION TO HEAR THE CLICK ON THE KEYS ON THE CALCULATOR 
 * created this function so I can listen for clicks on
 * the calculator keys and determine what type of key was clicked.
 * We have these set of buttons on the calculator (operator, calculator__percent,
 * calculator__plus-minus,calculator__square-root,calcultor__digit, calculator__decimal,calculator__all-clear, equal-sign)
 * Check if the clicked element is a button.
 * If not, exit from the function
 * the querySelector() returns the first element that matches a CSS selector
 

 INSERTDECIMAL FUNCTION
 * When the decimal point key is clicked on the calculator, I have to add a decimal point to whatever is
 * shown on the screen except if it already has a decimal point.
 * In insertDecimal function, I used the includes() method  to check if shownValue
 * has a decimal point. If true, a decimal is added to the number.
 * this function make sure after user inputted the firstOperand and operator, checkingForCurrentOperand is true, then click a decimal. showValue will updated to 0. which means the decimal is appended to the currentOperand instead of the first


CLEARCALCULATOR
* This function is to reset the calculator to it original state by clicking AC. 


CLICKDIGIT FUNCTION
* The showValue property of the calculator object represents the input of the user.
* Creating this function clickDigit to make the digit (numbers) buttons work so that when I click on them,
* the value of the clicked button is shown on the screen.

* checkingForSecondOperand property is set to true, the showValue property
* is replace with the number that was clicked. Else it will 
* replace or add to showValue as appropriate.

CONTROLOPERATOR FUNCTION 
* This function controlOperator is to get the operators (+, −, ⨉, ÷, =) on the calculator to work. 
* Operator button is clicked, the input of showValue is converted to a floating-point number 
* and the result is stored in the previousOperand property.

* The operator property is also set to whatever operator key was clicked, while 
* checkingForSecondOperand is set to true which shows that the previous operand has been entered 
* and whatever number the user enters next will be the current operand.


CALCULATE RESULT
* calculateResult function takes the previous operand, current operand and operator as arguments and checks 
* the value of the operator to determine how the expression should be assessed. 
* If the operator is =, the current operand will be returned as is.

CONTROLSPECIALOPERATOR
 * This function to get my special operators to work using switch statement
 * When the parameter 'specialSign' is % the signResult variable is assigned
 * to the calculation for percentage (/100) etc
 * The signResult is show at 5 decimal places
 * If checkingForCurrentOperand is true, it is set to
 * false so that the result of the function may be used as the current operand.
 