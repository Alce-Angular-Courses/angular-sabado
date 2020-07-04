export class Libro {
    // titulo: string
    constructor(
        public id: number | string = null,
        public autores: Array<string> = [],
        public titulo: string = ''
        )
    {
        // this.titulo = titulo
    }
}
