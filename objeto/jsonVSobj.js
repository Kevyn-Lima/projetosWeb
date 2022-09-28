//JSON é um formato de dados

const obj = {a: 1, b: 2,c: 3, soma(){return a + b + c} }
console.log(JSON.stringify(obj)) // não foi passado a função, por ser uma tratativa de dados apenas

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) => maneira errada de fazer
 
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))=> maneira errada de fazer

console.log(JSON.parse('{"a": 1, "b": 2, "c":3 }'))

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))


