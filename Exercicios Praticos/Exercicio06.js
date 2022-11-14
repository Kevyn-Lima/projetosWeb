function inverso(valor){
    const tipo = typeof valor
    if( tipo == "boolean"){
        return !valor
    }else if(tipo == "number"){
         return -valor
    }else{return `Booleano ou numero esperados, mas o paramentro é do tipo ${tipo}`}
}

console.log(inverso(1999))