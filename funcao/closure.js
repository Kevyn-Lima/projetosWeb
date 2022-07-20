// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

//Contexto Léxico em ação !

const x = 'Global'
function fora(){
    const x = 'Local'
    function dentro (){
        return x
    }
    return dentro()
}

//A função tem lembrança e vai sempre trazer do local de onde foi declarada, quando procura o valor que se foi passado.

// Closure, escopo que envolve a função e suas caracteristicas.

const minhaFuncao = fora()
console.log(minhaFuncao)