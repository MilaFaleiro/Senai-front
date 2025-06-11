function gerarTabuada() {
    // pega o valor do input do html.
    const numeroInput = document.getElementById('numeroinput')
    let numero = parseInt(numeroInput.value)

    //Mostra o resultado onde a tabela deve ser exibida.
    const resultadoDiv = document.getElementById('resultadoTabuada')
    resultadoDiv.innerHTML = '' // Limpa o conteúdo anterior

    //Adiciona o título da tabuada.
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`
    
    //laço de repetição para gerar a tabuada.
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
    
        // Adiciona cada linha da tabuada como um parágrafo.    
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`
    }
}
// Adiciona um evento de teclado para gerar a tabuada ao pressionar Enter
const gerarBotao = document.getElementById('gerarBotao')
gerarBotao.addEventListener('click', gerarTabuada)