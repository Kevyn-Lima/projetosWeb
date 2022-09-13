// coleção dinamica de apres chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo:'A4',
    valor: 90000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero:123
        },
        condutores:[{
            nome:'junior',
            idade:19
        },{
            nome:'Ana',
            idade: 42
        }],
        calcularValorSeguro: function(){}
    }
}

console.log(carro.proprietario.condutores[0].nome)
carro['proprietario']['endereco']['condutores'] = 'Ana'
console.log(carro)
delete carro.proprietario.condutores