import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  // poniendo el valor {} me da un error de que el ngfor solo acepta objetos [] aunque funciona igualmente
  private objetos:any[]= [];
  // tslint:disable-next-line:no-inferrable-types
  buscador:string='silla';

  constructor( private _dataService: DataService) {

  }
 

  ngOnInit() {
    this.get_Objetos();
  }


  public get_Objetos(){
    this._dataService.postNombreObjeto(this.buscador).subscribe(
      searchProfileResponse => {
        this.objetos=searchProfileResponse;
        console.log(this.objetos);
      },
      error => {
        console.log('error');
      }
    );}
 
 
    public buscar(){
      console.log(this.buscador);
    }
}
