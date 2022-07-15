/*Função em JS é First-Class Object (Citizens)
Higher-order function*/

// criar de forma literal

function fun1(){ }

//Armazenar em uma variavel

const fun2 = function () {} // function anonima

// Armazenar uma função dentro de um array

const array = [function(a, b){ return a + b}, fun1, fun2]
console.log(array[0](2,3)) 

//Armazenae em um atributo do objeto

const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//Passar como paramentro
function run(fun) {
    fun()  // para chamar a função, precisa ter os parenteses
}

run(function() {console.log('Executando...')})

// Uma função pode retornar/conter uma função

function soma(a, b){
    return function (c){
        console.log(a + b + c )
    }
}
soma(2,3)(4) // Se pode realizar uma chamada direta, ou atriubuir a uma variavel, e assim passar o paramentro de c
const cincoMais = soma(2,3)
cincoMais(4)