import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { ConversorService, MoedaService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalCotacaoComponent } from './utils';
import { NumeroDirective } from './directives';
import { DataBRPipe } from './pipes';



@NgModule({
  declarations: [
    ConversorComponent,
    ModalCotacaoComponent,
    NumeroDirective,
    DataBRPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
