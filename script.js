
screenDisplayedText = document.querySelector("#displayed-text");

operandButtons = document.querySelectorAll("#operands div div");

let firstOperand = "";
let secondOperand = "";
let operation = "";

operandButtons.forEach(operandButton => {
    let content = operandButton.textContent;
    if (!isNaN(parseInt(content))) {
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