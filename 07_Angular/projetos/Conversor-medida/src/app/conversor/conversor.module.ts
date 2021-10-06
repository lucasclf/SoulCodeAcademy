import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { MedidaService, ConversorService } from './services';
import { FormsModule } from '@angular/forms';
import { ModalConversaoComponent } from './utils';
import { NumeroDirective } from './directives';

@NgModule({
  declarations: [
    ConversorComponent,
    ModalConversaoComponent,
    NumeroDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MedidaService,
    ConversorService
  ]
})
export class ConversorModule { }
