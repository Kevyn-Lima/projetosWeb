// JSON Java Script Object Notation // Formato textual

//Notação liberal de objetos é o que está sendo utilizado aqui nessa parte.

//Um objeto é uma coleção de chave valor, um objetos, pode ter uma função, outro objeto, por exemplo produto e valores, e uma categorias que vende muito ou não.

const prod1 = {}

prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)
 
/*
    Um Objeto, pode ter outro objeto dentro dele, com a mesma nomenclatura de atributos, pois cada objeto é diferente de outro, apesar de um estar dentro do outro, não recomendado usar a mesma 
    nomenclatura, porém se necessario, pode ser utilizado.
*/

const prod2 = {
    nome: 'Camisa Polo', preco: 79.90,
}
console.log(prod2)