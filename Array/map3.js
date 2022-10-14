

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

Array.prototype.map2 = function(callBack){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callBack(this[i], i, this))
    }
    return newArray
}


const paraObjeto = obj => JSON.parse(obj)
const apenasPreco = produto => produto.preco

const retornaPreco = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(retornaPreco)

