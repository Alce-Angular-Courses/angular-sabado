import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'cas-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  clave: string;
  libros: Array<Libro>;
  msgError: string;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.libros = [];
  }

  onBuscar() {
    if (!this.clave) {
       return;
    }
    const url = environment.urlLibros + this.clave;
    this.http.get(url).toPromise()
    .then(
      (resp: any) => {
        const data: Array<Libro> = resp.items.map(
          item => new Libro(item.id, item.volumeInfo.authors, item.volumeInfo.title )
        );
        this.libros = data;
      }
    )
    .catch(
      err => { console.error(err.statusText); }
    );
    this.clave = '';
  }

  onBuscarRx() {
    if (!this.clave) {
       return;
    }
    const url = environment.urlLibros + this.clave;
    this.http.get(url).subscribe(
      (resp: any) => {
        const data: Array<Libro> = resp.items.map(
          item => new Libro(item.id, item.volumeInfo.authors, item.volumeInfo.title )
        );
        this.libros = data;
      }
    );
    this.clave = '';
  }
}
