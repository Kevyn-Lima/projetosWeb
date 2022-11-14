
// Função que recebe 4 numeros como parametros, e retorna se o parametro 1 esta entre o maximo e o minimo

function retonaMax(numero, minimo, maximo, inclusivo){
    if(numero == inclusivo && numero < maximo && numero > minimo){
        inclusivo = true;
        console.log(minimo + ' '+ numero + ' ' + maximo + ` ${inclusivo}` )
    }else inclusivo = false,console.log(minimo + ' '+ numero + ' ' + maximo + ` ${inclusivo}`)
}

retonaMax(100, 16, 100, 11)