const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // array externo com outros arrays e seus elementos

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, 'datanascimento', {
    enumerable: true,
    writable: false,
    value: '13/09/2022'
}) 

pessoa.datanascimento = '01/01/2022'
console.log(pessoa.datanascimento)

console.log(Object.keys(pessoa))

//  Object.assign (ECMAScript 2015)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
  
Object.freeze(obj)
obj.c = 1234
console.log(obj)
