function maiorOuMenor(num, num2){
    if(num > num2){
        return true
    } else if (num == num2) {
        return "Numeros iguais"
    } else{
        return false
    }
}

console.log(maiorOuMenor(3, 10))
