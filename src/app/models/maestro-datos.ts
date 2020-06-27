class MaestroDatos {
    constructor(
        public id: string = '',
        public nombre: string = '',
        public descripcion: string = '') {}
}

export class Turnos extends MaestroDatos {
    constructor(id: string, nombre: string, descripcion: string) {
        super(id, nombre, descripcion);
    }
}

export class Cursos extends MaestroDatos {
    constructor(id: string, nombre: string, descripcion: string) {
        super(id, nombre, descripcion);
    }
}
