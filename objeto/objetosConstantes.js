// pessoa -> 123 -> {...}
const pessoa = {nome: 'João',
                end:''}
pessoa.nome = 'Pedro'
pessoa.end = 'Rua ABC'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa.nome)
console.log(pessoa.end)

// Podemos criar uma constante, tanto para a referencia da variavel, quanto para o objeto que foi criado, como no exemplo abaixo.
const pessoaConstante = Object.freeze({nome: 'Jhonny'})
console.log(pessoaConstante.nome)