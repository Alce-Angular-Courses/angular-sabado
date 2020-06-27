import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'cas-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: Tarea;
  @Input() index: number;
  @Output() changeCompleted: EventEmitter<number>;
  @Output() deleteTarea: EventEmitter<number>;
  constructor() {
    this.changeCompleted = new EventEmitter();
    this.deleteTarea = new EventEmitter();
  }

  ngOnInit(): void {
    this.tarea = {...this.tarea};
    // this.tarea = JSON.parse(JSON.stringify(this.tarea));
  }

  sendChangeCompleted() {
    this.changeCompleted.next(this.index);
  }

  sendDeleteTarea() {
    this.deleteTarea.next(this.index);
  }
}
