import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PatientsService, ListComponent, PatientAttendDirective } from './shared';
import { RegisterComponent } from './register';
import { EditComponent } from './edit';


@NgModule({
  declarations: [
    ListComponent,
    RegisterComponent,
    EditComponent,
    PatientAttendDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PatientsService
  ]
})

export class PatientsModule { }
