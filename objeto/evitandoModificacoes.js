//Object.preventExtensions


const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

 produto.nome = 'Borracha'
 produto.descicao = 'Borracha escolar Branca'
 delete produto.tag

 console.log(produto)

 let endereco = {
    nome: 'Kevyn',
    logradouro: 'Rua Palmeiropolis',
    numero: 82
 }

 console.log(endereco)

 endereco.complemento = 'casa 04'

 console.log(endereco)


//Object.seal se pode alterar as informações do objeto, porém nao consegue excluir nem adicionar nada
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))


