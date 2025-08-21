
let screenDisplayedText = document.querySelector("#displayed-text");

let operandButtons = document.querySelectorAll("#operands div div");

let firstOperand = "";
let secondOperand = "";
let operation = "";

operandButtons.forEach(operandButton => {
    let content = operandButton.textContent;
    if (!isNaN(parseInt(content)) || content == ".") {
        operandButton.addEventListener("click", function (e) {
            let newDisplayedNumber = "";
            if (operation == "") {
                newDisplayedNumber = firstOperand += content;
            } else {
                newDisplayedNumber = secondOperand += content;
            }
            screenDisplayedText.textContent = newDisplayedNumber
        });
    }
});

let operationButtons = document.querySelectorAll("#operations div");
operationButtons.forEach(operationButton => {
    operationButton.addEventListener("click", function(e){
        operation = operationButton.textContent;
        secondOperand = "";
    });
});

let equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", function(e){
    let result = "";
    if(operation == "+"){
        result = String(Number(firstOperand) + Number(secondOperand));
    }
    if(operation == "-"){
        result = String(Number(firstOperand) - Number(secondOperand));
    }
    if(operation == "x"){
        result = String(Number(firstOperand) * Number(secondOperand));
    }
    if(operation == "/"){
        result = String(Number(firstOperand) / Number(secondOperand));
    }
    firstOperand = result;
    screenDisplayedText.textContent = result;
    operation = "";
    secondOperand = "";
});

document.querySelector("#AC").addEventListener("click", function(e){
    firstOperand = "";
    operation = "";
    secondOperand = "";
    screenDisplayedText.textContent = "0";
});
