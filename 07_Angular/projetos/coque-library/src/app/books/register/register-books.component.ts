import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { BookService, Book} from '../shared';

@Component({
  selector: 'app-register-books',
  templateUrl: './register-books.component.html',
  styleUrls: ['./register-books.component.css']
})
export class RegisterBooksComponent implements OnInit {

  @ViewChild('formBook', {static: true})formBook: NgForm;

  book: Book

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.book = new Book()
  };

  register(): void {
    if(this.formBook.form.valid){
      this.bookService.registerBook(this.book)
      this.router.navigate(['/books/list'])
    }
  }

}
