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
  constructor() { }

  ngOnInit(): void {
    this.nuevaTarea = new Tarea();
    this.tareas = [];
  }

  addTarea(ev) {
    if (!this.nuevaTarea.nombre) {
      return;
    }
    this.tareas.push( this.nuevaTarea );
    this.nuevaTarea = new Tarea();
    console.log(this.tareas);
  }

}
