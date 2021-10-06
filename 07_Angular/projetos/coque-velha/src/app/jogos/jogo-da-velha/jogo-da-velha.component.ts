import { Component, OnInit } from '@angular/core';
import { JogosService } from '../shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogosService: JogosService) { }

  ngOnInit(): void {
    this.jogosService.inicializar()
  }

  get showInicio(): boolean{
    return this.jogosService.showInicio
  }

  get showTabuleiro(): boolean{
    return this.jogosService.showTabuleiro
  }
  
  get showFinal(): boolean{
    return this.jogosService.showFinal
  }

  get jogador(): number {
    return this.jogosService.jogador
  }

  iniciarJogo(): void {
    this.jogosService.iniciarJogo()
  }

  jogar(posX: number, posY: number): void {
    this.jogosService.jogar(posX, posY)
  }

  exibirX(posX: number, posY: number): boolean {
    return this.jogosService.exibirX(posX, posY)
  }

  exibirO(posX: number, posY: number): boolean {
    return this.jogosService.exibirO(posX, posY)
  }

  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogosService.exibirVitoria(posX, posY)
  }

  novoJogo(): void {
    this.jogosService.novoJogo()
  }

  
}
