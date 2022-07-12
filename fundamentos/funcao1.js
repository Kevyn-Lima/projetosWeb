/* Função bloco de código que se pode utilizar N vezes, funções recebem paramentros de entrada que executa suas ações
as funções podem ter parametros ou nao, e retornar ou nao, que recebe ou nao retorna uma que recebe e retorna */

function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(5,6,4,5,2,3,4,1,2,3,5,4,5,5)
imprimirSoma()
imprimirSoma("texto ", "base")

// função com retorno

function soma(a, b = 1) {
    return a + b
}
//Exemplo simples de funções
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma(1))
console.log(soma())