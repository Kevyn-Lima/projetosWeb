//armazenando uma função em uma vareavel

const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Aramazenando uma Arrow function em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4))

// retorno implícito Arrow Function

const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

// Se consegue também atribuir um valor de string para cima dessa sintaxe, como no exemplo abaixo
const imprimir2 = a => console.log(a)
imprimir2("legal !!!") 
