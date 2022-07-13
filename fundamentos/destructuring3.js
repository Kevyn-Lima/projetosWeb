function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({min: 955})) // só atribuindo o valor minimo para o atributo min da função
const Obj = {max: 50, min: 40} // atribuindo os valores para os paramentros da função
console.log(rand(Obj))//traz um numero entre 50 e 40, pois foi atribuido no valor acima
console.log(rand({}))//traz aleatorio entre 0 e 1000, pelo motivo de ja esta defenido