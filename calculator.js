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
        return "Invalid operator"
    }
}