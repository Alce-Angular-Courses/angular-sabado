import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { FormularioTdComponent } from './formulario-td/formulario-td.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CursosComponent, FormularioTdComponent],
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
