import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'cas-saludo',
  templateUrl: './saludo.component.html',
  styles: [ 'h2 {color: brown }' ]
})
export class SaludoComponent implements OnInit, OnDestroy {
  titulo: string;
  nombre: string;
  mensajes: Array<string>;
  constructor() {
  }

  ngOnInit(): void {
    console.log('Iniciado el componente');
    this.titulo = 'Saludo';
    this.nombre = 'Pepe';
    this.mensajes =  ['Esto es un saludo', 'Dime tu nombre'];
   }

  ngOnDestroy(): void {
    console.log('Destruido el componente');
  }

  onClickBorrar(ev: Event) {
    this.nombre = '';
    console.log(ev);
  }
}
