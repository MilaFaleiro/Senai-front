// Atividade 6: crie um vetor que contenha 6. números, informe quantos são pares e quantos são ímpares. 

const readline = require('readline-sync')
const numeros = [];

for (let i = 0; i < 6; i++) {
    const numero = readline.questionInt(`Informe o ${i + 1}º número: `);
    numeros.push(numero);
}

let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);
