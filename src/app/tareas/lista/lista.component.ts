import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'cas-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  tareas: Array<Tarea>;
  constructor(public storeService: StoreService) { }

  ngOnInit(): void {
    this.tareas = this.storeService.getTareas();
    /* this.tareas = localStorage.getItem(this.store)
    ? JSON.parse(localStorage.getItem(this.store)) : []; */
  }

  onAddTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    this.storeService.setTareas(this.tareas);
    // localStorage.setItem(this.store, JSON.stringify(this.tareas));
    // console.log(this.tareas);
  }

  onChangeCompleted(i: number) {
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted;
    this.storeService.setTareas(this.tareas);
  }

  onDelete(i: number) {
    this.tareas.splice(i, 1);
    this.storeService.setTareas(this.tareas);
  }

}
