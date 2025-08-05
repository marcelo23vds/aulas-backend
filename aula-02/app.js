/********************************************************************
 * Objetivo: Realizar o calculo de médias escolares (condicionais, tratamento de erro, variáveis)
 * Autor: Marcelo Vieira
 * Data: 05/08/2025
 * Versão: 1.1
********************************************************************/

//import do arquivo/biblioteca de medias escolares
var mediaEscolar = require('./modulo/media.js')

//import da biblioteca do readline
var readline = require('readline')

//cria um objeto para criar uma interface de entrada de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*******************************************************************
* Formas de criação de variáveis:
*
* LET -> criar uma variavel dentro de um escopo de bloco, onde essa variavel nasce e morre dentro do bloco
* VAR -> permite criar uma variavel dentro ou fora de um escopo de bloco, porém não se utiliza com tanta frequencia
* CONST -> permite criar um espaço em memória onde não sofre alteração de conteúdo, podendo ser criado dentro ou fora de um escopo de bloco
*
* Métodos de conversão de tipos de dados:
*
* String() -> converte um objeto ou variavel em String
* Number() -> converte um objeto ou variavel para numero inteiro ou decimal (float), conforme a necessidade
* parseInt() -> converte um objeto ou variavel para numero inteiro
* parseFloat() -> converte um objeto ou variavel para numero decimal (float)
* Boolean() -> converte um objeto ou variavel para booleano
* Object() -> converte um objeto ou variavel para objeto (array, json, class)
*
* Operadores de comparação:
*
* == validação de igualdade de conteúdos
* > validação de maior
* < validação de maior
* <= validação de menor ou igualdade de conteúdos
* >= validação de maior ou igualdade de conteúdos
* != diferença de conteúdos
* === validação de igualdade de tipo de dados e conteúdos
* !== validação de diferença de conteúdos e igualdade de tipos de dados
* !=! validação de diferença de conteúdos e diferença de tipos de dados
*
* Operadores lógicos
* 
* E     and     &&
* OU    or      ||
* Não   not     !
*******************************************************************/

//padrão de mensagens de erro da aplicação
const MESSAGE_ERROR_EMPTY        = 'ERRO: Existem campos que não foram preenchidos.'
const MESSAGE_ERROR_NOT_NUMBER   = 'ERRO: Não é possivel calcular com a entrada de letras.'
const MESSAGE_ERROR_OUT_OF_RANGE = 'ERRO: Os valores informados precisam ser entre 0 e 10.'

//entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    let nomeAluno = String(nome).toUpperCase()

    if (nomeAluno == ''){
        console.log(MESSAGE_ERROR_EMPTY)
        entradaDeDados.close()
    } else {
        //entrada de dados da nota 1
        entradaDeDados.question('Digite a nota 1: ', function(valor1){
            let nota1 = valor1

            if(nota1 == '' || Number(nota1) < 0 || Number(nota1) > 10) {
                console.log(MESSAGE_ERROR_OUT_OF_RANGE)
                entradaDeDados.close() 
            
            } else if(isNaN(nota1)) {
                console.log(MESSAGE_ERROR_NOT_NUMBER)
                entradaDeDados.close() 
            } else {
                //entrada de dados da nota 2
                entradaDeDados.question('Digite a nota 2: ', function(valor2){
                    let nota2 = valor2

                    if(nota2 == '' || Number(nota2) < 0 || Number(nota2) > 10) {
                        console.log(MESSAGE_ERROR_OUT_OF_RANGE)
                        entradaDeDados.close()
                    } else if(isNaN(nota2)) {
                        console.log(MESSAGE_ERROR_NOT_NUMBER)
                        entradaDeDados.close() 
                    } else {
                        //entrada de dados da nota 3
                        entradaDeDados.question('Digite a nota 3: ', function(valor3){
                            let nota3 = valor3

                            if(nota3 == '' || Number(nota3) < 0 || Number(nota3) > 10) {
                                console.log(MESSAGE_ERROR_OUT_OF_RANGE)
                                entradaDeDados.close()
                            } else if(isNaN(nota3)) {
                                console.log(MESSAGE_ERROR_NOT_NUMBER)
                                entradaDeDados.close() 
                            } else {
                                //entrada de dados da nota 4
                                entradaDeDados.question('Digite a nota 4: ', function(valor4){
                                    let nota4 = valor4

                                    if (nota4 == '' || Number(nota4) < 0 || Number(nota4) > 10) {
                                        console.log(MESSAGE_ERROR_OUT_OF_RANGE)
                                        entradaDeDados.close()
                                    } else if(isNaN(nota4)) {
                                        console.log(MESSAGE_ERROR_NOT_NUMBER)
                                        entradaDeDados.close() 
                                    } else {
                                        
                                        //chama função de calcular media do aluno
                                        let media = mediaEscolar.calcularMedia(nota1,nota2,nota3,nota4)
                                        //chama função de verificar o status do aluno
                                        let statusAluno = mediaEscolar.validarStatus(media)

                                        if(statusAluno) {
                                            console.log(`O aluno(a) ${nomeAluno}, teve a média: ${media} e está ${statusAluno}`)
                                            entradaDeDados.close()
                                        }
                                        
                                    }
                                })//fecha a nota 4
                            }

                        })//fecha a nota 3
                    }

                })//fecha a nota 2
            }

        })//fecha a nota 1
    } 
})//fecha o nome