import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(args=='imagen'){
        if(value ==''){
          return 'assets/images/noimage.png';
        }else if(!value){
          return 'assets/images/noimage.png';
        }else{
          return value;
        }
      }
    

    if(args=='categoria'){
      if(value ==''){
        return 'En amazon este artículo no tiene categoría';
      }else if(!value){
        return 'En amazon este artículo no tiene categoría';
      }else{
        return value;
      }
    }
  

  // Esto lo hago para poder saber si existe o no el precio normal, ya que en los arrays devueltos que no 
  // tienen ofertas no existe , entonces al pasarle este valor por parametro a la funcion que comrpueba si
  // hay oferta, para comprarar el precio inicial y el final , en los arrays que el parametro no existe da error
  // y para el programa
  if(args=='precio_normal'){
    // El object.keys().lenght es como un array length pero de objetos
    let cantidad_objetos= Object.keys(value).length;
    if(cantidad_objetos==3){
      return false;
    }else{
      return value.Offer.OfferListing.Price.FormattedPrice;
    }
    
  }



if(args=='precio_rebajado'){
  if(value ==''){
    return 'En amazon este artículo no tiene precio_rebajado';
  }else if(!value){
    return 'En amazon este artículo no tiene precio_rebajado';
  }else{
    return value;
  }
}


}}
