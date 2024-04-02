const letra = prompt("Digite uma letra:");

if (
  letra === "a" ||
  letra === "e" ||
  letra === "i" ||
  letra === "o" ||
  letra === "u" ||
  letra === "A" ||
  letra === "E" ||
  letra === "I" ||
  letra === "O" ||
  letra === "U"
) {
  console.log("A letra digitada é uma vogal.");
} else if ((letra >= "a" && letra <= "z") || (letra >= "A" && letra <= "Z")) {
  console.log("A letra digitada é uma consoante.");
} else {
  console.log("Por favor, digite apenas uma letra.");
}
