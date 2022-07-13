const [a] = [10]
console.log(a)

const [n1, , n2, n3, n4 = 0] = [10, 7, 9, 8]
console.log(n1, n2, n3, n4)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] 
/*Uma matriz criada, onde um array esta dentro de outro array, nessa caso em especifico
o Destructuring, esta ignorando o primreiro array [,[]] e acessando o segundo array que esta dentro do primeiro, ou seja 
['primeiro array'[primeiro array do segundo array][segundo array do segundo array]] e é o segundo array, do segundo array, que esta sendo puxado pelo destructuring e na segunda posição que é 
o numero 6*/

console.log(nota)