let verPares = parseInt(prompt("Digite um número e veja a sequência de pares"));

if (isNaN(verPares)) {
    console.log("Por favor, informe um número válido.");
} else {
    console.log("Números pares entre 1 e " + verPares + ":");
    for (let i = 1; i <= verPares; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}