const nota = parseFloat(prompt("Digite a nota:"));

if (nota >= 0 && nota <= 10) {
  console.log("A nota digitada é válida.");
} else {
  console.log(
    "A nota digitada não é válida. Por favor, digite uma nota entre 0 e 10."
  );
}
