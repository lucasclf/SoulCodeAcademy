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
    this.books = [
      new Book(1, 'Livro 01', 'Autor 01', 'Edição 01','Genêro 01', 100, 'ISBN 01', 'Publisher 01', '01/10/1987'),
      new Book(2, 'Livro 02', 'Autor 02', 'Edição 02','Genêro 02', 200, 'ISBN 02', 'Publisher 02', '02/10/1987')
    ]
  }

  listBooks(): Book[] {
    return this.bookService.listBooks();
  }

}
