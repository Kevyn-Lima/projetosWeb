function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1^trabalho2) //bitwise XOR
    const comprarTv32 = trabalho1 != trabalho2
    const saudavel = !comprarSorvete // Operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, saudavel}
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))