// crie umj vetor com 5 números, mostre a quantidade de numeros negativos e a soma dos positivos desse vetor.

const readline = require('readline-sync');
const numeros = [];
for (let i = 0; i < 5; i++) {
    const numero = readline.questionInt(`Informe o ${i + 1}º número: `);
    numeros.push(numero);
}
let negativos = 0;
let somaPositivos = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
        negativos++;
    } else {
        somaPositivos += numeros[i];
    }
}
console.log(`Quantidade de números negativos: ${negativos}`);
console.log(`Soma dos números positivos: ${somaPositivos}`);