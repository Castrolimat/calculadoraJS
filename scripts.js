var num1;
var num2;
var op;

function pegarNumero(value) {
    document.getElementById("tela").value += value;
}

function limparTela() {
    document.getElementById("tela").value = "";
}

function zerar() {
    limparTela();
    num1 = 0;
    num2 = 0;
}

function selecionarOp(value) {
    op = value;
    num1 = Number(document.getElementById("tela").value);
    limparTela();
}

function calcular() {
    num2 = Number(document.getElementById("tela").value);
    switch (op) {
        case "+":
            document.getElementById("tela").value = num1 + num2;
            break;

        case "-":
            document.getElementById("tela").value = num1 - num2;
            break;
        case "*":
            document.getElementById("tela").value = num1 * num2;
            break;
        case "/":
            document.getElementById("tela").value = num1 / num2;
            break;
    }
}