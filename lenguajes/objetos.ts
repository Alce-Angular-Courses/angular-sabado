

class PersonaTS {
    /* public name: string;
    edad: number;
    constructor(name: string, edad: number) {
        this.name = name;
        this.edad = edad;
    } */

    constructor(
        public name: string = '',
        public edad: number = 0) {}

    saludar() {
        console.log(`Hola soy ${this.name}`);
    }
}

const person2 = new PersonaTS('Rosa', 32);
// error en TS person2.apellido = 'Perez';
delete person2.edad; // no se suele usar
console.log(person2);
person2.saludar();

class AlumnoTS extends PersonaTS {

    constructor(name: string, edad: number, public curso: string) {
        super(name, edad);
    }
    saludar() {
        super.saludar();
        console.log(`Estudio ${this.curso}`);
    }
}

const a1 = new AlumnoTS('Luis', 26, 'Angular');
a1.saludar();
