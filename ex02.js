//[ ] Faça um programa que verifica se uma pessoa é brasileira ou não. //Obs: DEVE SER UM OBJETO

const Person1 = {
    name: 'Machado de Assis',
    sex: 'Male',
    demise: '29/09/1908',
    nationality: 'Brasileira'
}

const Person2 = {
    name: 'Gabriel José García Márquez',
    sex: 'Male',
    demise: '17/04/2014',
    nationality: 'Colombiana'
}

if (Person2.nationality == 'Brasileira') {
    console.log('É brasileira')
}
else {
    console.log('É estrangeira')
}