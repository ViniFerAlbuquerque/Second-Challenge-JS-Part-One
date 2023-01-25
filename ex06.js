//[]Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada 
//nota deve conter uma mensagem diferente.


const Note = 6

switch (Note) {
    case 0:
        console.log('Muito fraco. Sem comentários!')
        break;
    case 1:
        console.log('Horroroso, têm que melhorar muito.')
        break;
    case 2:
        console.log('Muito Ruim, mas está tentando, siga em frente.')
        break;
    case 3:
        console.log('Ruim, mas deu para compreender.')
        break;
    case 4:
        console.log('Não foi bom, mas prossiga tentando.')
        break;
    case 5:
        console.log('Mediano, se empenhe mais.')
        break;
    case 6:
        console.log('Bom, porém dá pra melhorar. Tem talento.')  
        break;
    case 7:
        console.log('Legal, está acima da média.')  
        break;
    case 8:
        console.log('Ótimo, muito boa a execução, parabéns!')
        break;
    case 9:
        console.log('Parabéns, maravilhosa apresentação. Por um detalhe não tira nota máxima!')   
        break;
    case 10:
        console.log('Excelente, parabéns. Perfeito!!!')
}