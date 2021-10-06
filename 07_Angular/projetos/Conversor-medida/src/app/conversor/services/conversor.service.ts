import { Injectable } from '@angular/core';
import { Conversao } from '../models';

@Injectable()
export class ConversorService {

  conversao: Conversao;
  valorConvertido: string;


  constructor() { }

  kelvinToCel(valor: number) {
    return this.valorConvertido = (valor - 273).toFixed(2);
  }

  kelvinToFar(valor: number) {
    return this.valorConvertido = (((valor - 273) * 1.8) + 32).toFixed(2);
  }

  celsiusToKel(valor: number) {
    return this.valorConvertido = ((valor - 273) + 546).toFixed(2);
  }

  celsiusToFar(valor: number) {
    return this.valorConvertido = ((valor * 1.8) + 32).toFixed(2);
  }

  fahrenhteitToCel(valor: number) {
    return this.valorConvertido = ((valor - 32) / 1.8).toFixed(2);
  }

  fahrenhteitToKel(valor: number) {
    return this.valorConvertido = (((valor - 32) * (5 / 9)) + 273).toFixed(2);
  }

  converter(valor: number, medidaDe: string, medidaPara: string) {

    switch (medidaDe) {
      case "K":
        if (medidaPara === "C") {
          return this.kelvinToCel(valor);
        } else if (medidaPara === "F") {
          return this.kelvinToFar(valor);
        }
        break;

      case "C":
        if (medidaPara === "K") {
          return this.celsiusToKel(valor);
        } else if (medidaPara === "F") {
          return this.celsiusToFar(valor);
        }
        break;

      case "F":
        if (medidaPara === "C") {
          return this.fahrenhteitToCel(valor);
        } else if (medidaPara === "K") {
          return this.fahrenhteitToKel(valor);
        }
        break;

     
    }
    return valor;

  }
}
