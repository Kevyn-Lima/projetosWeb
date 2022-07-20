function criarProduto(nome, preco, desconto = 0.1){
        return{
            nome, 
            preco,
            desconto
        }
}

console.log(criarProduto('Leite', 45))
console.log(criarProduto('Laptop Apple', 13.050))