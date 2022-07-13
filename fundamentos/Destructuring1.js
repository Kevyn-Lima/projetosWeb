// Novo ES2015

const pessoa = {
    nome: "Ana",
    idade: 25,
    endereco: {
        logradouro: "Rua João Gomes",
        numero: 125,
        cidade: "São Paulo"
    }
}
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)
const {endereco: {logradouro, numero}} = pessoa // acessou outro objeto dentro do objeto, nesse exemplo podemos trazer apenas as informações do logradouro e numero que esta dento de endereco
console.log(logradouro, numero)
// se por algum acaso, acesssar atributos que nao existem dentro do objeto, ele ira trazer como undefined.