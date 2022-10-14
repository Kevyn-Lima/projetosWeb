const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Lucas', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]


// todos os alunos são bolsistas ?
const bolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(bolsista))

// Algum aluno é bolsista ?

const algumBolsista = (resultado, bolsista) => resultado || bolsista  

console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

