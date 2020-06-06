const obj = {} // new Object()
const aDatos = [] // new Array()

const person = {name: 'Pepe', edad: 23} 
person.apellido = 'Perez'
person.saludar = function () {
    console.log(`Holo soy ${this.name}`)
}
delete person.edad

console.log(person)
person.saludar()

// Patron de objetos basados en Funciones constructoras

function Persona(name, edad) {
    this.name = name
    this.edad = edad
}
Persona.prototype.saludar = function () {
    console.log(`Hola soy ${this.name}`)
}

const person2 = new Persona('Elena', 32)
person2.apellido = 'Perez'
delete person2.edad
console.log(person2)
person2.saludar()