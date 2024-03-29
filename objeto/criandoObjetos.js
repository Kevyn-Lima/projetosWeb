// usando a notação literal

const obj1 = {}

console.log(obj1)

// object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


// funções construtoras

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 15.48, 0.15)
const p2 = new Produto('Notebook', 4138.00, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase/30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 7980.00, 4)
const f2 = criarFuncionario('Maria', 1500.00, 5)
console.log(f1.nome, f1.getSalario(), f2.nome, f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha.nome)

// Uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)