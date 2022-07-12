const funcs = []
for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

/* de fato como a utilização do VAR nao respeita o escopo de função, ela somente ira atribuir o valor final que sera 10, pois este é o valor que 
esta sendo atribuido a variavle 'i' quando sai do loop */

