import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private num1!: string;
  private num2!: string;
  private operacao!: string;
  private resultado!: number;

  constructor(private calculadoraService: CalculadoraService) { };

  ngOnInit() {
    this.limpar()
  };

/**
 * Metodo para inicializar todos os operadores para seus valores padrão.
 * 
 * @return void - retorna algo vazio/sem retorno.
 */

  limpar(): void {
    this.num1 = '0';
    this.num2 = null;
    this.operacao = null;
    this.resultado = null;
  };

/**
 * Metodo para retornar o valor concatenado. 
 * Tratando ainda o separador decimal.
 * 
 * @param numAtual string
 * @param numConcat string
 * @return string
 */
  concatenaNumero(numAtual: string, numConcat: string){
    /* Caso contenha apenas 0 ou null, reinicilizar o valor. */
    if(numAtual === '0' || numAtual === null){
      numAtual = '';
    };
    
    /* Primeiro digito '.', concatena com zero antes do ponto. */
    if(numConcat === '.' && numAtual === ''){
    return '0.';
    };

    /* Caso '.' digitado e já exista um '.' apenas retorna o numero atual. */
    if(numConcat === "." && numAtual.indexOf('.') > -1){
      return numAtual;
    };

    return numAtual + numConcat
  };

  /**
   * Metodo para adcionar o numero selecionado para o cálculo posterior.
   * 
   * @param numero string
   * @return void - Sem retorno
   */
  adcionaNumero(numero: string): void{
    if(this.operacao === null){
      this.num1 = this.concatenaNumero(this.num1, numero)
    } else {
      this.num2 = this.concatenaNumero(this.num2, numero)
    };
  };

  
  definirOperacao(operacao: string): void{
    
    /* Definindo a operação, caso ainda não exista uma. */
    if(this.operacao === null){
      this.operacao = operacao
      return
    };

    if(this.num2 !== null){
      this.resultado = this.calculadoraService.calcular(
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.operacao 
      );
      this.operacao = operacao;
      this.num1 = this.resultado.toString();
      this.num2 = null;
      this.resultado = null;
    };
  };

  /**
   * Efetua o cálculo de uma operação.
   * 
   * @returns void - sem retorno
   */
    calcular(): void{
      if(this.num2 === null){
        return;
      };

      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.num1),
        parseFloat(this.num2),
        this.operacao 
        );
      
      this.num1 = this.resultado.toString();
      this.operacao = 'null'
      this.num2 = 'null'

      };

      get display(){
        if(this.resultado !== null){
          return this.resultado.toString();
        };

        if(this.num2 !== null){
          return this.num2.toString();
        };
        
        return this.num1.toString();
      };

}
