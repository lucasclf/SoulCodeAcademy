import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from './shared';
import { ListBooksComponent } from './list';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterBooksComponent } from './register';


@NgModule({
  declarations: [
    ListBooksComponent,
    RegisterBooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    BookService
  ]
})

export class BooksModule { }
