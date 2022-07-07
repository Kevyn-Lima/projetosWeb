let valor // não inicializada // sera como undefined, porque nao foi atribuida um valor nela

console.log(valor)
// console.log(valor2) > nem se quer recebeu uma definição

valor = null // ausencia de valor, nao esta apontando para algum valor, ela esta vazia em outras palavras. 
console.log(valor)
    
    //Undefined = Não defenido, nao possui valor defenido
    //Null = Não tem nenhum valor apontado como referencia.
    //console.log(valor.toString()) TypeError: Cannot read properties of null (reading 'toString')

const produto = {}

console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // Evitar atribuir Undefined, deixar para a propria linguagem determinar se é ou não

console.log(!!produto.preco)
console.log(produto.preco)
// se quiser tirar um valor de um atributo, utilize sempre o Delete como no exemplo abaixo
delete produto.preco
console.log(produto)

produto.preco = null //Sem preço 
console.log(produto)

/* uma atribuição por valor cada variavel tem o seu valor, e uma é indepentende da outra, como por exemplo 

    a = 3
    b = a
    b++
    console.log(b)
    sera impresso 4 pois 3 é uma variavel por valor apenas e é independente
    agora quando é por referencia, seria como um objeto, nao é um valor independente, apenas apontam para o mesmo lugar, assim pode ser alterada.
*/

