const readline = require('readline');

soma = 0; 
let notas = 0;
for (let i = 1; i <= 2; i++) {
    do{
        nota =  readline.questionFloat('Digite uma nota: ');

} while (nota < 0 || nota > 10);
    soma += nota;
}
media = soma / 2;
console.log(`A média é: ${media}`);