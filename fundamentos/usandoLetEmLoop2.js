const funcs = []
for (let i = 0; i < 10; i++){
    funcs.push(function(){ // <= nessa linha, estamos atribuindo com o comando push, e a função, o valor de 'i' que esta em loop, no array, então, cada posição do array vai ser pelo loop de 'i'
        console.log(i)
    })
}
funcs[2]()
funcs[8]()