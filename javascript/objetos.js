//Vetores com objetos
const pessoas = [
    { nome: 'Pedro', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'João', idade: 20 }
];
console.log(`\nExibindo todos os elementos do vetor`)
pessoas.forEach(pessoas => {
    console.log(`${pessoas.nome} tem ${pessoas.idade} anos`)
})

console.log(`\nFiltrando úsuario.`)
const menorQueTrinta = pessoas.filter(pessoa => pessoa.idade < 30);
menorQueTrinta.forEach(pessoa => {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos`)
});

console.log(`\nExibindo apenas o nome dos usuários`)
const nomes = pessoas.map(pessoa => pessoa.nome);
nomes.forEach(nome => {
    console.log(`Nome: ${nome}`);
});

console.log(`\nExibindo o nome dos usuários com numeração. `)
nomes.forEach( (nome, index) => {
    console.log(`${++index}: ${nome}`)
})

console.log(`\nEncontrar um usuário. `)
const pessoaEncontrada = pessoas.find(pessoa => pessoas.nome === 'Maria')
console.log(`Nome: ${pessoaEncontrada.nome}, Idade ${pessoaEncontrada.idade}`)

console.log(`\nMostra a soma de todas as idades.`)
const somaIdades = pessoas.reduce((total, pessoa) => total + pessoa.idade, 0)
console.log(`Total: ${somaIdades}`)