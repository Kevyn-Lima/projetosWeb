const sequencia = {
    _valor: 1, // convenção, monstra que esta pretendendo apenas acessar internamente essa variavel
    get valor(){ return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)