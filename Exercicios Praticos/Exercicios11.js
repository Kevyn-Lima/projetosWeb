

function retornoObjeto(objeto, nomedaPropriedade){
    const copia = Object.assign({}, objeto)
    delete copia[nomedaPropriedade]

    return copia
}

console.log(retornoObjeto({id: 01,idade: 21, nome: 'Kevyn', Logradouro: 'Rua Palmeiropolis', EstadoCivil: 'Solteiro'}, 'id'))