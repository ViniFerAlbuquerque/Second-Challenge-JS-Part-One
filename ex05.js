/*
[ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,
a pessoa deve ser maior de idade e brasileira para ser aprovada.
*/

const firstCandidate = { nome: "Vinicius", idade: 45, sexo: "masculino", profissão: "Desenvolvedor", nacionalidade: "Brasileira" }


if(firstCandidate.idade >= 18 && (firstCandidate.nacionalidade === 'Brasileiro '|| firstCandidate.nacionalidade === "Brasileira")){
    console.log('Você passou!')
}

else {
    console.log('Você não passou.')
}