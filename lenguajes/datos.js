console.log('Hola Mundo')

// ES6
let v1 = 21
const c1 = 'Hola'

if (true) {
    let v1 = 2100
    const c1 = 'Hola desde dentro'
    console.log(v1)
    console.log(c1)
}

console.log(v1)
console.log(c1)

const user = 'Pepe'
// user = 'Jose' da error

const datos = [1,2,3]
const usuario = {name: 'Pepe', edad: 23}

// error datos = [1,2,3]

datos.push(4)
usuario.name = 'Jose'

console.log(datos)
console.log(usuario)

// Objetos (arrays) son referencias

let a = 3
let b = a

const num1 = [1,2,3]
const num2 = num1
num1.push(1,3,5)

console.log(num1)
console.log(num2)

const num3 = JSON.parse(JSON.stringify(num1))
//const num3 = [...num1]

num3.push(56)

console.log(num1)
console.log(num3)

