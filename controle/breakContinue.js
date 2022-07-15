const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let x in nums){
    if (x == 5) break // pulou para o final da sentença
   // console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if( y == 5) continue // pulou o indice 5 e continuou a sentença
    console.log(`${y} = ${nums[y]}`)
}

externo:
for (a in nums) {
    for (b in nums){
        if( a ==2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
} 
console.log('Fim')