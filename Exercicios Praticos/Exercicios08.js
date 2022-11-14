function simboloMais(quantidade) {
        let resultado = ''
        for(let i = 0; i < quantidade; i++)
        resultado += '+'
        return resultado
      
   //return Array(quantidade).fill('+').join('')
}

console.log(simboloMais(4))