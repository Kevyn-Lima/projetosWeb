class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Louis')
p1.falar()

// Utilizando esse método para criar a função, ele nao precisa utilizar o "this", pois ele tem ciencia de onde esta a variavel e de onde foi criado, diferente da classe
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Batman')

p2.falar()