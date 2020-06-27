import { Turnos, Cursos } from './maestro-datos';

export class Alumno{

    constructor(
        public nombre: string = '',
        public apellidos: string = '',
        public dni: string = '',
        public passwd: string = '',
        public email: string = '',
        public coments: string = '',
        public nacim: Date = null,
        public isOk: boolean = false,
        public turno: Turnos = null ,
        public curso: Cursos = null,
    )
    {}

}






