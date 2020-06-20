import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cas-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: [
    './saludo-ref.component.css',
    '../home.component.css'
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class SaludoRefComponent implements OnInit {

  @ViewChild('refNombre', {static: true}) nombre: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.dir(this.nombre.nativeElement);
  }

}
