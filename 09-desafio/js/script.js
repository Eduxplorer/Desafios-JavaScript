const operacao = prompt("Digite a operação matemática (+, -, *, /):");

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

let resultado;

switch (operacao) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    resultado = numero1 / numero2;
    break;
  default:
    console.log("Operação inválida!");
}

console.log("O resultado da operação é:", resultado);
