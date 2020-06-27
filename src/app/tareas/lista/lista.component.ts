import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'cas-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  tareas: Array<Tarea>;
  constructor() { }

  ngOnInit(): void {
    this.tareas = [];
  }

  onAddTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    console.log(this.tareas);
  }

  onChangeCompleted(i: number) {
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted;
    console.log(this.tareas);
  }

  onDelete(i: number) {
    this.tareas.splice(i, 1);
    console.log(this.tareas);
  }

}
