import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  clave: string;
  libros: Array<string>;
  msgError: string;

  constructor() { }

  ngOnInit(): void {
    this.libros = [];
  }

  onBuscar() {
    if (!this.clave) {
       return;
    }
    this.clave = '';
  }

}
