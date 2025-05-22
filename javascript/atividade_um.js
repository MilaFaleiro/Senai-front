const readlineSync = require('readline-sync');
let numero = parseInt(readlineSync.question("digite um número para a tabela: "))

for (let i = 1; i <=10; i ++) {
    let resultado = numero * 1;
    console.log(`${numero} x ${i} = ${resultado}`);
}