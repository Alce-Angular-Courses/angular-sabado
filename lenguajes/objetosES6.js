class PersonaES6 {
    constructor(name, edad) {
        this.name = name
        this.edad = edad
    }
    saludar() {
        console.log(`Hola soy ${this.name}`)
    }
}

const person2 = new PersonaES6('Rosa', 32)
person2.apellido = 'Perez'
delete person2.edad
console.log(person2)
person2.saludar()

class Alumno extends PersonaES6 {
    constructor(name, edad, curso) {
        super(name, edad)
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}

const a1 = new Alumno('Luis', 26, 'Angular')
a1.saludar()