const pilotos = ['Hamillton','Alonso','Verstappen','Senna']

pilotos.pop() // Senna Morreu! Retirra o Array da utlima possição
console.log(pilotos)

pilotos.push('Raikonnen') // Adiciona uma posição ao Array
console.log(pilotos)

pilotos.shift() //Retira o prineiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamillton') //Adiciona no primeiro indice do array
console.log(pilotos)

//splice, pode adicionar ou remover dentro de um array

pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

pilotos.splice(4, 1) // Verstappen saiu para passear.
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // retorna um novo Array
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(0, 4) // o slice coleta até o 4 elemento, porém o indice 4 nao entra no novo array, no novo Slice.
console.log(algunsPilotos1)