//stores the operands and operators for calculations
let operandOne = 0;
let operandTwo = 0;
let operator;

//when the flag is true: the next time an operand button is pressed, the display is cleared
let clearDisplayFlag = false;

//reference to the display element
const display = document.querySelector("p");

//gets all of the operands button except 0 and givse them an event listener to add number into display if the key is pressed
const operandButtons = document.querySelectorAll(".operand");
operandButtons.forEach((operand) => {
    operand.addEventListener("click", (e) => {
        if (clearDisplayFlag) {
            display.textContent = "";
            clearDisplayFlag = false;
        }
        display.textContent = display.textContent + e.target.textContent;
    });
});

//same function as operandButtons, extra conditional to prevent user from putting multiple 0's when there is already a 0
const zeroButton = document.querySelector(".zero");
zeroButton.addEventListener("click", (e) => {
    if (clearDisplayFlag) {
        display.textContent = "";
        clearDisplayFlag = false;
    }
    if (display.textContent != "0") {
        display.textContent = display.textContent + e.target.textContent;
    }
});

//same function as operandButtons, extra conditional to prevent user from putting multiple decimal points
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", (e) => {
    if (clearDisplayFlag) {
        display.textContent = "";
        clearDisplayFlag = false;
    }
    if (!(display.textContent.indexOf(".") > -1)) {
        display.textContent = display.textContent + e.target.textContent;
    }
});

//sets event listener on operator buttons, saves the operand in display and sets the operator variables
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener("click", (e) => {
        operator = e.target.textContent;
        operandOne = parseFloat(display.textContent);
        display.textContent = "";
    });
});

//gets both operands and operations and calculates result, then sets up calculator for next calculation
const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", (e) => {
    operandTwo = parseFloat(display.textContent);
    result = operate(operandOne, operandTwo, operator);
    display.textContent = result;
    operandOne = result;
    operator = undefined;
    operandTwo = 0;
    clearDisplayFlag = true;
});

const backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", () => {
    if (clearDisplayFlag) {
        reset();
    } else if (!display.textContent == "") {
        display.textContent = display.textContent.slice(0, -1);
    }
});

//clears display and resets all variables
const clearButton = document.querySelector(".del");
clearButton.addEventListener("click", reset);

//resets calculator
function reset() {
    operandOne = 0;
    operator = undefined;
    operandTwo = 0;
    display.textContent = "";
    clearDisplayFlag = false;
}

// takes 2 operands and an operator and performs a calculation
function operate(operandOne, operandTwo, operator) {
    if (operator === "+") {
        return operandOne + operandTwo;
    } else if (operator === "-") {
        return operandOne - operandTwo;
    } else if (operator === "*") {
        return operandOne * operandTwo;
    } else if(operator === "/") {
        return operandOne / operandTwo;
    } else {
        return "Invalid operator";
    }
}