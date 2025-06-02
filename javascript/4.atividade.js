function verificaSinal(numero) {
    if (numero > 0) {
        return 'Positivo';
    } else if (numero < 0) {
        return 'Negativo';
    } else {
        return 'Zero';
    }
}

const readline = require('readline-sync');
const numero = readline.questionInt('Digite um número: ');
console.log(`O número ${numero} é ${verificaSinal(numero)}.`);