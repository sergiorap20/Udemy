import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private dataService: DataService;

  constructor( public _dataService: DataService) {
  }

  // public get_DataService() {
  //   return this.dataService.objetos.products[0].offers;
  // }

  ngOnInit() {
  }

}
