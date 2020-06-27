import { Component, OnInit } from '@angular/core';
import { LibrosMockService } from 'src/app/services/libros-mock.service';

@Component({
  selector: 'cas-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {
  clave: string;
  libros: Array<string>;
  msgError: string;

  constructor(public librosSrv: LibrosMockService) { }

  ngOnInit(): void {
    this.libros = [];
  }

  onBuscar() {
    if (!this.clave) {
       return;
    }
    this.libros = this.librosSrv.buscar(this.clave);
    this.clave = '';
  }

  onBuscarAsync() {
    if (!this.clave) {
      return;
   }
    this.libros = [];
    this.librosSrv.buscarAsync(this.clave)
     .then( (resp) => this.libros = resp)
     .catch( (error) => this.msgError = error.message);
  }

}
