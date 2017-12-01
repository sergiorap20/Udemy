import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modificarValue'
})
export class ModificarValuePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(args=='imagen'){
      // compruebo si imageset es un array , viendo si su posicion 0 es null
      // si no es un array devuelvo el valor en forma de no array
        if(value.ImageSet[0] == null){
          return value.ImageSet.MediumImage.URL;
        }else{
      // si es un array devuelvo el valor en forma de array
          
          return value.ImageSet[0].MediumImage.URL;
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
  
  if(value.LowestNewPrice.FormattedPrice ==null){

    return value.LowestUsedPrice.FormattedPrice;
    
  }else{
    return value.LowestNewPrice.FormattedPrice;
  }
}


}}
