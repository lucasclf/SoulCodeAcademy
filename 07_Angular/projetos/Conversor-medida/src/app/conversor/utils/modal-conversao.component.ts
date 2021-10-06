import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConversorService } from '../services';
import { Conversao } from '../models';


@Component({
  selector: 'modal-conversao',
  templateUrl: './modal-conversao.component.html',
  styleUrls: ['./modal-conversao.component.css']
})
export class ModalConversaoComponent implements OnInit {

  @Input() id: string;
  @Input() conversao: Conversao = new Conversao();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();


  constructor(private conversorService: ConversorService) { }



  ngOnInit(): void {
  }

  novaConsulta() {
    this.onConfirm.emit();
  }

  get valorConvertido() {
    let valor: number = this.conversao.valor;
    let medidaDe: string = this.conversao.medidaDe;
    let medidaPara: string = this.conversao.medidaPara;
    return this.conversorService.converter(valor, medidaDe, medidaPara);
  }
  /* get medidaPara(): number{
    return this.conversorService.cotacaoPara(this.conversaoResponse, this.conversao)
  }

  get medidaDe(): string{
    return this.conversorService.cotacaoDe(this.conversaoResponse, this.conversao)
  } */


}



