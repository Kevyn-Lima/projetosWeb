const Fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

Fabricantes.forEach(imprimir)
Fabricantes.forEach(fabricante => console.log(fabricante))

/* Evento é cada um dos elementos percorrido no Array, o callback percorre e trás o índice junto com o nome*/