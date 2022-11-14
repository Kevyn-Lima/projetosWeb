let Dobro = function a() {
    return 2 *a
}

Dobro = (a) => {return 2 * a}

Dobro = a => 2 * a // Return implicito

console.log(Dobro(Math.PI))

let ola = function(){
    return 'Ola'
} 

ola = () => 'ola' // funções anonimas, voce pode colocar os parenteses sem paramentros
ola = _=> 'Olá'// Ou pode colocar "_" porém, esse é um parametro, o que nao pode é deixar a Arrow function, sem paramentros, ou chamada da função "()"
console.log(ola())



