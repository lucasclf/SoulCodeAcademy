import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './components/material/material.component';
import { DemoMaterialModule } from '../shared/material-module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule
  ]
})
export class MaterialModule { }
