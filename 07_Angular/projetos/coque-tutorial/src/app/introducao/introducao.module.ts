import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroducaoComponent } from './components/introducao/introducao.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { PooComponent } from './components/poo/poo.component';
import { DemoMaterialModule } from '../shared/material-module';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    IntroducaoComponent,
    TypescriptComponent,
    PooComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule
  ]
})
export class IntroducaoModule { }
