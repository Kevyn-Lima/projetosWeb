Array.prototype.reduce2 = function(callBack){
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++){
        acumulador = callBack(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nume = [1, 2, 3, 4, 5, 6]

console.log(nume.reduce2(soma))

