import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'cas-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {
  nuevaTarea: Tarea;
  tareas: Array<Tarea>;
  store: string;
  constructor() { }

  ngOnInit(): void {
    this.store = 'tareas';
    this.nuevaTarea = new Tarea();
    this.tareas = localStorage.getItem(this.store)
    ? JSON.parse(localStorage.getItem(this.store)) : [];
  }

  addTarea(ev) {
    if (!this.nuevaTarea.nombre) {
      return;
    }
    this.tareas.push( this.nuevaTarea );
    this.nuevaTarea = new Tarea();
    this.updateStorage();
  }

  onChangeCompleted() {
    this.updateStorage();
  }

  deleteTarea(i: number) {
    this.tareas.splice(i, 1);
    this.updateStorage();
  }

  private updateStorage() {
    localStorage.setItem(this.store, JSON.stringify(this.tareas));
    console.log(this.tareas);
  }
}
