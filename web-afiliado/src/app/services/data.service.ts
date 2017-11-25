import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  cargada= false;
  // objetos: any = {};
  objetos_get:any = {};
  objetos_post:any= {};
  constructor(public http: HttpClient ) {
    this.getObjetos();
    this.postNombreObjeto();
   }


  // public carga_info() {
  //   this.http.get('assets/data/data-ebay.json')
  //   .subscribe( data => {
  //     this.cargada = true;
  //     // sin el .json() lo pasa todo, no solo el body en forma de json que es lo que interesa
  //     // console.log(data);
  //     this.objetos = data.json();
  //   });
  //   }

  private _buildParams(params: any) {
    let urlSearchParams = new URLSearchParams();

    for(let key in params){
        if(params.hasOwnProperty(key)){
            urlSearchParams.append(key, params[key]);
        }
    }
    return urlSearchParams.toString();
}


    public postNombreObjeto(){

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      const body = 'msg=silla';

      
      this.http.post('http://localhost/prueba-amazonPHP/prueba-post.php', body , {headers : headers})
        .subscribe(
          data => {this.objetos_post=data;
          console.log(this.objetos_post);
        },
          err => console.log(err),
          () => console.log('Call Complete')
        );
    }
    public getObjetos() {
     
      const url = 'http://localhost/prueba-amazonPHP/amazon.php';
      this.http.get(url)
      .subscribe(
        // Successful responses call the first callback.
        data => {
          this.objetos_get=data;
          console.log(this.objetos_get);
        },
        // Errors will call this callback instead:
        err => {
          console.log(err);
        }
      );
}


}
