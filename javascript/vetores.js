const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"]
console.log(frutas)

console.log(`\nExibindo apenas um elemento do vetor`)
console.log(frutas[2])
console.log(frutas[0])

console.log(`Adicionando um elemento ao vetor`)
frutas.push("kiwi")
console.log(frutas)

console.log(`\nRemovendo o ultimo elemento do vetor`)
frutas.pop()
console.log(frutas)

console.log(`\n Removendo o primeiro elemento do vetor`)
frutas.shift()
console.log(frutas)

console.log(`\nAdicionando um elemento no inicio do vetor`)
frutas.unshift("morango")
console.log(frutas)

console.log(`Percorrendo o vetor`)
frutas.forEach((fruta, index) => {
    console.log(`${++index}: ${fruta}`)
})