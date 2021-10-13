import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha';
import { JogosService } from './shared';



@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JogoDaVelhaComponent
  ],
  providers: [
    JogosService
  ]
})
export class JogoDaVelhaModule { }
