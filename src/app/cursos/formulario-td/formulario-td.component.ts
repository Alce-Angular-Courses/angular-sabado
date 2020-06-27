import { Component, OnInit, ViewChild } from '@angular/core';
import { Turnos, Cursos } from 'src/app/models/maestro-datos';
import { TURNOS, CURSOS } from 'src/app/models/datos-cursos';
import { Alumno } from 'src/app/models/alumno';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cas-formulario-td',
  templateUrl: './formulario-td.component.html',
  styleUrls: ['./formulario-td.component.css']
})
export class FormularioTdComponent implements OnInit {
  turnos: Array<Turnos>;
  cursos: Array<Cursos>;
  alumno: Alumno;
  @ViewChild('refForm', {static: true}) form: NgForm;
  constructor() { }

  ngOnInit(): void {
    this.turnos = TURNOS;
    this.cursos = CURSOS;
    this.alumno = new Alumno();
    console.log(this.form);
  }

  onSubmit() {
    // TODO Enviar los datos -> AJAX
    /* Opción B if (this.form.invalid) {
      console.log('Formulario invalido')
      return;
    } */
    console.log('Enviando', this.alumno)
  }

}
