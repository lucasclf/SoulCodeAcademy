import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Conversao, ConversaoResponse } from '../models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=40935d6ff4dcb09464bb89f52b1c6dc6&format=1";

  constructor(private http: HttpClient) { }

  /**
   * 
   * Realizar a chamada para a api de conversão de moedas.
   */

  converter(conversao: Conversao): Observable<any> {
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`
    return this.http.get(this.BASE_URL+params)
  }

  /**
   * Retorna a cotação para um dado de resposta (Response)
   * @param conversaoResponse 
   * @param conversao 
   * @returns 
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
    if(conversaoResponse === undefined){
      return 0
    }
    return conversaoResponse.rates[conversao.moedaPara]
  }

  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string{
    if(conversaoResponse === undefined){
      return '0'
    }

    return (1/conversaoResponse.rates[conversao.moedaPara]).toFixed(4);

  }

  dataCotacao(conversaoResponse: ConversaoResponse):string{
    if(conversaoResponse === undefined){
      return '';
    }
    return conversaoResponse.date;
  }
}
