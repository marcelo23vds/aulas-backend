/********************************************************************
 * Objetivo: Iniciar os primeiros comandos em Node.JS
 * Autor: Marcelo Vieira
 * Data: 29/07/2025
 * Versão: 1.0
********************************************************************/

/* comentário em bloco */
// comentário em linha

//import da biblioteca para fazer entrada de dados via terminal
//(iremos utilizar ela de forma provisória)
var readline = require('readline')

//criando um objeto de entrada de dados para captar ou printar dados via terminal
var entradaDeDados =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o seu nome: ', function(nome){
    var nomeUsuario = nome

    if (nomeUsuario == ''){
        console.log('Não foi possivel processar a solicitação')
    } else {
        //String() -> converte um objeto em string
        //toUpperCase() -> converte o conteudo de uma string em MAIUSCULO
        console.log('O nome digitado foi: ' + String(nomeUsuario).toUpperCase())
    }

    entradaDeDados.close()
})

/*
console.log('Aula 01 de Node.JS')

//declarando uma variavel
var nome = 'Marcelo'

//exemplo de concatenação de dados (simbolo de (+))
console.log('O nome digitado foi ' + nome)

//exemplo de concatenação de método reduzido
console.log(`O nome digitado foi ${nome}`)

//typeof -> permite mostrar o tipo de dados de um objeto ou variavel
console.log(typeof(nome))

*/