/********************************************************************
 * Objetivo: Arquivo responsável pelo processamento de calculo de medias escolares e status de aprovação
 * Autor: Marcelo Vieira
 * Data: 05/08/2025
 * Versão: 2.0
********************************************************************/

//função para realizar calculos de médias escolares
function calcularMedia (valor1, valor2, valor3, valor4){
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    return media.toFixed(1)
}

function validarStatus (valor){
    let media = Number(valor)

    let statusAluno

    if (media < 5 && media >= 0) {
        statusAluno = 'REPROVADO'
    } else if(media >= 5 && media < 7){
        statusAluno = 'em EXAME'
    } else if(media >= 7 && media <= 10) {
        statusAluno = 'APROVADO'
    }

    if(statusAluno == undefined ) {
        return false
    } else {
        return statusAluno
    }
}

//console.log(5,6,7,8)
//console.log(validarStatus('4.6'))

//permite deixar todas as funções, variaveis, constantes, objetos publicos para serem utilizadas em outros arquivos ou projetos
module.exports = {
    calcularMedia, 
    validarStatus
}