// Cadeia de protótipos (prototype chain)

const avo = { attr: 'A '}
const pai = {__proto__: avo , attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr)

const carro = {
    velAtual:0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340 // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
         return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
ferrari.aceleraMais(330)
console.log(volvo.status())
console.log(ferrari.status())

