import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable()
export class BookService {

  constructor() { }

  listBooks(): Book[] {
    const books = localStorage['books'];
    return books ? JSON.parse(books): []
  }

  registerBook(newBook: Book): void {
    const books = this.listBooks();
    newBook.id = new Date().getTime();
    books.push(newBook);
    localStorage['books'] = JSON.stringify(books)
  }

  searchBookId(id: number): Book {
    const books = this.listBooks();
    return books.find(book => book.id === id)
  }

  editBook(book: Book): void{
    const books = this.listBooks();
    books.forEach((obj, index, objs) => {
      if(book.id === obj.id){
        objs[index] = book
      }
    });
    localStorage['books'] = JSON.stringify(book);
  }

  deleteTask(id: number): void{
    let books = this.listBooks();
    books = books.filter(books => books.id !== id);
    localStorage['books'] = JSON.stringify(books);
  }

}
