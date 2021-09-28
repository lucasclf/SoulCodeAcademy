import { Component, OnInit } from '@angular/core';
import { CientificaService } from '../services';

@Component({
  selector: 'app-cientifica',
  templateUrl: './cientifica.component.html',
  styleUrls: ['./cientifica.component.css']
})
export class CientificaComponent implements OnInit {

  private num1!: string;
  private num2!: string;
  private operacao!: string;
  private resultado!: number;

  constructor(private cientificaService: CientificaService) { };

  ngOnInit(): void {
    this.limpar()
  };

  limpar(): void {
    this.num1 = '0';
    this.num2 = null;
    this.operacao = null;
    this.resultado = null;
  };

  concatenaNumero(numAtual: string, numConcat: string){
    if(numAtual === '0' || numAtual === null){
      numAtual = '';
    };

    if(numConcat === '.' && numAtual === ''){
      return '0.';
    };

    if(numConcat === '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    };

    return numAtual + numConcat
  }

  adicionaNumero(numero: string): void{
    if(this.operacao === null){
      this.num1 = this.concatenaNumero(this.num1, numero)
    } else {
      this.num2 = this.concatenaNumero(this.num2, numero)
    };
  };

  adicionaPi(): void {
    if(this.operacao === null){
      this.num1 = "3.14"
    } else {
      this.num2 = "3.14"
    };
  };

  adicionaRaiz(): void {
    if(this.operacao === null){
      this.num1 = Math.sqrt(parseFloat(this.num1)).toString()
    } else {
      this.num2 = Math.sqrt(parseFloat(this.num2)).toString()
    };
  }

  adicionaQuadrado(): void {
    if(this.operacao === null){
      this.num1 = Math.pow(parseFloat(this.num1),2).toString()
    } else {
      this.num2 = Math.pow(parseFloat(this.num2),2).toString()
    };
  }

  adicionaCubo(): void {
    if(this.operacao === null){
      this.num1 = Math.pow(parseFloat(this.num1),3).toString()
    } else {
      this.num2 = Math.pow(parseFloat(this.num2),3).toString()
    };
  }

  definirOperacao(operacao: string): void{
    if(this.operacao === null){
      this.operacao = operacao
      return
    }

    if(this.num2 !== null){
      this.resultado = this.cientificaService.calcular(
        parseFloat(this.num1),
        parseFloat(this.num2),
        this.operacao
      );

      this.num1 = this.resultado.toString();
      this.operacao = null;
      this.num2 = null;
      this.resultado = null;
    };
  };

  calcular(): void{
    if(this.num2 === null){
      return;
    };

    this.resultado = this.cientificaService.calcular(
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.operacao
    );

    this.num1 = this.resultado.toString();
    this.operacao = null;
    this.num2 = null;
  }

  get display() {

    if (this.num2 != null) {
      return this.num1+this.operacao+this.num2
    }
    if(this.operacao !=null){
      return this.num1+this.operacao
    }
    return this.num1.toString();
  }

}