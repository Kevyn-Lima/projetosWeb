const aprovados = ['Agatha', 'Lucas', 'John', 'Monica']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// posso passar apenas o que quero acessar como aqui, só estou buscando o nome dos aprovados, e nao seu indice também 
//aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

