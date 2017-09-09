import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-css',
  templateUrl: './componente-css.component.html',
  styleUrls: ['./componente-css.component.css']
})
export class ComponenteCssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hola: string= 3;

}
