const number = parseInt(prompt("Digite um número:"));

console.log("Números ímpares de 1 a", number, ":");

let i = 1;

while (i <= numero) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
