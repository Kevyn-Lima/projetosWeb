
function teste(){
    console.log(a)
    var a = 2
    console.log(a)    
}
teste()

console.log('a =',a)
var a = 2
console.log('a =',a)
//console.log('b =',b) Let por ser de escopo, não faz a vez do hoisting
let b = 2
console.log('b =',b)