// nome/valor
const saudacao = "Opa" // Contexto Léxico 1 endereço fisico do seu código, onde aquele par chave/nome/valor foi defenifo, aqui seria no global
function exec() {
    const saudacao = "Falaaa" // contexto Léxico 2
    return saudacao
}
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Top",
        numero: 321
    }
}
console.log(exec())
console.log(saudacao)
console.log(cliente)