import { Pipe, PipeTransform } from '@angular/core';
import { Cuadernillo } from '../models/cuadernillo';

@Pipe({
  name: 'pipes',
  standalone: true
})
export class PipesPipe implements PipeTransform {
 //cree una lista vacia para que no muestre nada
  listaVacia: Cuadernillo []=[]; 

  //recibe desde el html una lista de cuadernillos, y busca si hay coincidencias 
  //con las terminos ingresados
  transform(value: Cuadernillo[], term: string): any {
    
    if (term.length < 3 || term === '') {
      return this.listaVacia;
    }
    term = term.toLowerCase();
    return value.filter((cuadernillo: Cuadernillo) => {
      return cuadernillo.nombre.toLowerCase().includes(term);
    });
  }

}
