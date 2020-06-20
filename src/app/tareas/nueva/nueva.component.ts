import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'cas-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {
  nuevaTarea: Tarea;
  @Output() addTarea: EventEmitter<Tarea>;
  constructor() {
    this.addTarea = new EventEmitter();
   }

  ngOnInit(): void {
    this.nuevaTarea = new Tarea();
  }

  sendAddTarea() {
    if (!this.nuevaTarea.nombre) {
      return;
    }
    this.addTarea.next(this.nuevaTarea);
    this.nuevaTarea = new Tarea();
  }
}
