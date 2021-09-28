import { Component, OnInit } from '@angular/core';
import { Book } from '..';
import { BookService } from '..';

@Component({
  selector: 'app-register-books',
  templateUrl: './register-books.component.html',
  styleUrls: ['./register-books.component.css']
})
export class RegisterBooksComponent implements OnInit {

  books: Book[]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
