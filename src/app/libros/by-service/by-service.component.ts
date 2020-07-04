import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'cas-by-service',
  templateUrl: './by-service.component.html',
  styleUrls: ['./by-service.component.css']
})
export class ByServiceComponent implements OnInit {
  clave: string;
  libros: Array<Libro>;
  msgError: string;

  constructor(public librosSrv: LibrosService) { }

  ngOnInit(): void {
    this.libros = [];
  }

  onBuscar() {
    if (!this.clave) {
      return;
    }
    this.librosSrv.searchGoogle(this.clave).then(
      (data: Array<Libro>) => this.libros = data
    );
  }

}
