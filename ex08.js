//[ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

const Number = 3

if (Number % 2 === 0) {
  if (Number % 5 === 0) {
    console.log('É par e divisível por 5')
  } 
  else {
    console.log('É par, mas NÃO é divisível por 5')
  }
}
else {
  for (let i = 2; i < Number; i++) // número primo é o divisível apenas por 1 e por ele mesmo
    if (Number % i === 0) {
      console.log('É ímpar, mas NÃO é primo')
      break
    } else {
      if (i === Number - 1) console.log('É um número primo')
    }
}