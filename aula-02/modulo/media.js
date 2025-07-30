/********************************************************************
 * Objetivo: Arquivo responsável pelo processamento de calculo de medias escolares e status de aprovação
 * Autor: Marcelo Vieira
 * Data: 30/07/2025
 * Versão: 1.0
********************************************************************/

//função para realizar calculos de médias escolares
function mediaEscolar (valor1, valor2, valor3, valor4){
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    return media.toFixed(1)
}


//permite deixar todas as funções, variaveis, constantes, objetos publicos para serem utilizadas em outros arquivos ou projetos
module.exports = {
    mediaEscolar
}