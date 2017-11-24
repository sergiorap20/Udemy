import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DataService {
  cargada= false;
  objetos: any = {};
  constructor(public http: Http ) {
    this.carga_info();
   }


  public carga_info() {
    this.http.get('assets/data/data-ebay.json')
    .subscribe( data => {
      this.cargada = true;
      // sin el .json() lo pasa todo, no solo el body en forma de json que es lo que interesa
      // console.log(data);
      this.objetos = data.json();
    });
    }


}
