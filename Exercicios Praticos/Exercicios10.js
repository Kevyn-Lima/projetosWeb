function retornaArray(item){
    
    const indexFirstElement = 0
    const indexLastElement = item.length -1 
    const firstElement = item[indexFirstElement]
    const lastElement = item[indexLastElement]
    

    /*const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = elementos.length - 1
    const primeiroElemento = elementos[indiceDoPrimeiroElemento]
    const ultimoElemento = elementos[indiceDoUltimoElemento] */
    
    return [firstElement,lastElement]
}

console.log(retornaArray(['Kevyn', 'lucas', 'ricardo', 'jhony', 'Elizabeth']))