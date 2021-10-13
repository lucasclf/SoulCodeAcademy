import { Injectable } from '@angular/core';
import { Medida } from '../models';


@Injectable()
export class MedidaService {

  private medida: Medida[];

  constructor() { }

  private medidaObj = [
    {"unidade": "C" , "descricao": "Celsius"},
    { "unidade": "F", "descricao": "Fahrenheit" },
    { "unidade": "K", "descricao": "Kelvin" }

  ];

  listarTodos(): Medida[]{
    if(this.medida){
      return this.medida;
    }
     this.medida = [];
 
    for(let medidaObj of this.medidaObj){
      let medidas: Medida = new Medida ();
      Object.assign(medidas, medidaObj);
      this.medida.push(medidas);
    }
    return this.medida;
    }


  

}
