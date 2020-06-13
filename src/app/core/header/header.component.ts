import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  logo: any;
  constructor() { 
    this.title = 'Angular Sábados en CAS';
    this.logo = {
      src: '../assets/logo_angular.svg',
      alt: 'Logotipo de Angular'
    };
  }

  ngOnInit(): void {
  }

}
