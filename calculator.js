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
const display = document.querySelector("p");

const operandButtons = document.querySelectorAll(".operand");
operandButtons.forEach((operand) => {
    operand.addEventListener("click", (e) => {
        if (operator === undefined) {
            display.textContent = display.textContent + e.target.textContent;
            operandOne = (operandOne * 10) + parseFloat(e.target.textContent);
        } else {
            display.textContent = display.textContent + e.target.textContent;
            operandTwo = (operandTwo * 10) +  parseFloat(e.target.textContent);
        }
    });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener("click", (e) => {
        operator = e.target.textContent;
        display.textContent = "";
    });
});

const clearButton = document.querySelector(".del");
clearButton.addEventListener("click", (e) => {
    operandOne = 0;
    operator = undefined;
    operandTwo = 0;
    display.textContent = "";
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", (e) => {
    result = operate(operandOne, operandTwo, operator);
    display.textContent = result;
    operandOne = result;
    operator = undefined;
    operandTwo = 0;
});