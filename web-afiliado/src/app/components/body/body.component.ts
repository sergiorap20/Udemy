import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  // poniendo el valor {} me da un error de que el ngfor solo acepta objetos [] aunque funciona igualmente
  public objetos:any[]= [];
  // tslint:disable-next-line:no-inferrable-types
  buscador:string='silla';
  ofertas=false;
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
        console.log(error);
      }
    );}
 

    // Compruebo si el parametro que recibo , que es el del array que dice si tiene ofertas
    // es mayor o menor que 0 este array siempre es mayor que 0 si hay alguna oferta
    // , en algunos los datos de amazon están mal y aunque digan que si hay oferta, el precio inicial es
    // = al precio rebajado , por lo tanto solo devuelvo true si también el precio normal es diferente del rebajado
    public comprobarOferta(oferta,precio_normal?,precio_rebajado?):boolean{
     
      if(oferta>0 && precio_normal != precio_rebajado){
        return true;
      }else{
        return false;
      }
    }


    }
