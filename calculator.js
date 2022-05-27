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

let operandOne = 0;
let operator;
let operandTwo = 0;
let clearDisplayFlag = false;
const display = document.querySelector("p");

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

const zeroButton = document.querySelector(".zero");
zeroButton.addEventListener("click", (e) => {
    if (display.textContent != "0") {
        display.textContent = display.textContent + e.target.textContent;
    }
});

const decimalButton = document.querySelector(".decimal");
console.log(decimalButton)
decimalButton.addEventListener("click", (e) => {
    if (clearDisplayFlag) {
        display.textContent = "";
        clearDisplayFlag = false;
    }
    console.log("yeet");
    if (!(display.textContent.indexOf(".") > -1)) {
        display.textContent = display.textContent + e.target.textContent;
    }
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener("click", (e) => {
        operator = e.target.textContent;
        operandOne = parseFloat(display.textContent);
        display.textContent = "";
    });
});

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

const clearButton = document.querySelector(".del");
clearButton.addEventListener("click", (e) => {
    operandOne = 0;
    operator = undefined;
    operandTwo = 0;
    display.textContent = "";
    clearDisplayFlag = false;
});