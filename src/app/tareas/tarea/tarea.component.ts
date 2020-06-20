import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'cas-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: Tarea;
  @Output() changeCompleted: EventEmitter<any>;
  @Output() deleteTarea: EventEmitter<any>;
  constructor() { }

  ngOnInit(): void {

  }

  sendChangeCompleted() {
    this.changeCompleted.next();
  }

  sendDeleteTarea() {
    this.deleteTarea.next();
  }
}
