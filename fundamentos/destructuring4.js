//Utilizando um Destructuring em um Array.
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40]))
/* como no Array, ele nao tem identificado de maior ou menor, ele simplesmente aloca posições,  if (min > max) [min, max] = [max, min] nessa linha, ele esta dizendo que se min
for maior que max, que inverta as posições para poder ser feita a proxima linha de código, para assim ser feita a conta e trazer de fato o valor.*/
console.log(rand([992]))//atribuindo como valor minimo
console.log(rand([,10]))//Atribuido o segundo valor
console.log(rand([]))//Valor vazio, entao por padrao, ira navegando entre 0 e 1000