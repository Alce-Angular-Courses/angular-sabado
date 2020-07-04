import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  urlGoogle: string;

  constructor(public http: HttpClient) {
    this.urlGoogle = environment.urlLibros;
  }

  searchGoogle(clave): Promise<Array<Libro>> {
    if (!clave) {
      return;
    }
    return this.http.get(this.urlGoogle + clave ).toPromise()
    .then(
      (resp: any) => {
        return resp.items.map(
          (item: any) => new Libro(item.id, item.volumeInfo.authors, item.volumeInfo.title)
        );
      }
    );
  }

}
