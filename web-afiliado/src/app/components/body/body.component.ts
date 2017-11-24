import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private dataService: DataService;

  constructor( _dataService: DataService) {
    this.dataService = _dataService;
    console.log(_dataService);
  }

  public get_DataService() {
    return this.dataService.objetos.products[0].offers;
  }

  ngOnInit() {
  }

}
