import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '..';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.listBooks()
  }

  listBooks(): Book[] {
    return this.bookService.listBooks();
  }

}
