const produtos = [
    {nome: 'Laptop', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    if(p.preco > 500 && p.fragil == true){
        return true
    }else false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))