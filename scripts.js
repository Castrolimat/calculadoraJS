var num1;
var num2;
var op;

function getNumber(value) {
    document.getElementById("screen").value += value;
}

function cleanScreen() {
    document.getElementById("screen").value = "";
}

function reset() {
    cleanScreen();
    num1 = 0;
    num2 = 0;
}

function getOp(value) {
    op = value;
    num1 = Number(document.getElementById("screen").value);
    cleanScreen();
}

function getResult() {
    num2 = Number(document.getElementById("screen").value);
    switch (op) {
        case "+":
            document.getElementById("screen").value = num1 + num2;
            break;

        case "-":
            document.getElementById("screen").value = num1 - num2;
            break;
        case "*":
            document.getElementById("screen").value = num1 * num2;
            break;
        case "/":
            document.getElementById("screen").value = num1 / num2;
            break;
    }
}