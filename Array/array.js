let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abia','Liz')
console.log(aprovados.length)
aprovados[9] = 'João'
console.log(aprovados)
aprovados.sort() //Metódo que traz primeiro o que tem definição e logo após os que nao tem
console.log(aprovados)

delete aprovados[1]
aprovados[1] = 'Lucas' // se pode fazer a exclusão de um valor de um array e adicionar depois dentro daquela mesma posição
console.log(aprovados) 

aprovados = ['Ana', 'Bia', 'Carlos']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') 
//splice() => exclue, adiciona e faz ambos ao mesmo tempo se necessario dependendo, primeiro elemento diz o indice em que quer trabalhar, nesse caso a partir do elemento 1, vai excluir dois elementos e adicionar
console.log(aprovados)
