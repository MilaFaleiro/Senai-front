function somar (a, b) {
    return a + b;
}
function subtrair (a, b) {
    return a - b;
}  
function multiplicar (a, b) {
    return a * b;
}
function dividir (a, b) {
    return a / b;
}

//chamando a função.
//adiciona o resultado da função na constante.

const soma = somar(2,10)
const subtracao = subtrair(10,2)
const multiplicacao = multiplicar(2,10)
const divisao = dividir(10,2)

//mostra o conteudo da constante.
console.log(`Soma: ${soma}`) 
console.log(`Subtração: ${subtracao}`)
console.log(`Multiplicação: ${multiplicacao}`)
console.log(`Divisão: ${divisao}`)