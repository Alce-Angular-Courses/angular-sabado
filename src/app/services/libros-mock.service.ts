import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
})
export class LibrosMockService {
  libros: Array<string>;
  constructor() {
    this.libros = [
        'Acerca de Angular',
        'Aprendiendo Angular',
        'Angular avanzado'
      ];
   }

  buscar(clave: string) {
    if (!clave) {
      return [];
    } else {
      return this.libros;
    }
  }

  buscarAsync(clave: string): Promise<Array<string>> {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        if (clave.toLowerCase() === 'angular') {
          resolve( this.libros );
          } else {
          reject( new Error('Clave no válida'));
          }
      }, 2000);
    });
  }

}
