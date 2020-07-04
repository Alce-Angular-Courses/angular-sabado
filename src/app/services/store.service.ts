import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  storeTareas: string;
  constructor() {
    this.storeTareas = 'tareas';
  }

  setTareas(value: Array<any>) {
    localStorage.setItem(this.storeTareas, JSON.stringify(value));
  }

  getTareas(): Array<any> {
    if (!localStorage.getItem(this.storeTareas)) {
      return []
    }
    return JSON.parse(localStorage.getItem(this.storeTareas));
  }

  
}
