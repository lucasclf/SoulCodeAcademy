import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';


@Injectable()
export class DadosService {

  
  public dados = [
    ["Junho", 1],
    ["Julho", 1],
    ["Agosto", 1],
    ["Setembro", 1]
  ];

  definirDados(junho: number, julho: number, agosto: number, setembro: number): void {
    this.dados[0][1] = junho
    this.dados[1][1] = julho
    this.dados[2][1] = agosto
    this.dados[3][1] = setembro
  }

  mostraDados(){
    console.log("junho",this.dados[0][1])
    console.log("julho",this.dados[1][1])
    console.log("agosto",this.dados[2][1])
    console.log("setembro",this.dados[3][1]);
  }
  
  constructor() { }

  obterDados(): Observable<any>{
    return new Observable( observable => {
      observable.next(this.dados);
      observable.complete();
    })
  }
}