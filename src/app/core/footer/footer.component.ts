import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  author: string;
  hoy: Date;
  constructor() {
    this.author = 'Alejandro Cerezo - alce65@hotmail.es';
    this.hoy = new Date();
  }

  ngOnInit(): void {
  }

}
