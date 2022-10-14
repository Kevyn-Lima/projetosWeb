const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

// Calculo de média no imperativo

console.log(total1 / alunos.length)

// calculo declarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const toatl2 = alunos.map(getNota).reduce(soma)
console.log(toatl2 / alunos.length)