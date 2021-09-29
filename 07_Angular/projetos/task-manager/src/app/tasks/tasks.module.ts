import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService, TaskConcludedDirective, ListTaskComponent } from './shared';
import { RegisterTaskComponent } from './register';
import { EditTaskComponent } from './edit';



@NgModule({
  declarations: [
    ListTaskComponent,
    RegisterTaskComponent,
    EditTaskComponent,
    TaskConcludedDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], providers: [
    TaskService
  ]
})

export class TasksModule { }
