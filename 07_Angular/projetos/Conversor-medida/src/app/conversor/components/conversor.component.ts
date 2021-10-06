import { Component, OnInit, ViewChild } from '@angular/core';
import { ConversorService, MedidaService } from '../services';
import { NgForm } from '@angular/forms';
import { Medida, Conversao } from '../models';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  medida: Medida[];
  conversao: Conversao;
  possuiErro: boolean;

  @ViewChild("conversaoForm", {static: true}) conversaoForm: NgForm;

  constructor(
    private medidaService: MedidaService, 
    private conversorService: ConversorService
    ) { }
 
    /**
     * efetua a chamada, a conversao dos valores
     */
    
  ngOnInit(): void {
    this.medida = this.medidaService.listarTodos();
    this.init();
  }

  init(): void{
    this.conversao = new Conversao('C', 'K', null);
    this.possuiErro = false;
  }
  converter(): void{
    if(this.conversaoForm.form.valid){
      let valor: number = this.conversao.valor; 
      let medidaDe: string = this.conversao.medidaDe;
      let medidaPara: string = this.conversao.medidaPara;
     this.conversorService.converter(valor, medidaDe, medidaPara);
    }
  }


  

}
