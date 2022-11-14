function Salario(horasTrabalhadas, valorHora){
    const salarioBruto = horasTrabalhadas * valorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return `Salario igual a R$ ${salarioLiquido}`
}

console.log(Salario(10,100))