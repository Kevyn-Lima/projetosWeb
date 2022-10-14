const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]


const paraObjeto = obj => JSON.parse(obj)
const apenasPreco = produto => produto.preco

const retornaPreco = carrinho.map(paraObjeto).map(apenasPreco)
console.log(retornaPreco)

