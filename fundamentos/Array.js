const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // utilizando as posições para acessar o Array

valores [4] = 10 //adicionando um valor na posição
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')

console.log(valores)
console.log(valores.length) // trazendo o tamanho do array

console.log(valores.pop()) // tras o ultimo valor do Array

delete valores[0] // deletando o conteudo daquela posição
console.log(valores)

console.log(typeof valores)


