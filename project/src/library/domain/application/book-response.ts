import { Book } from '../model/book/book';

export class BookResponse {
  readonly book!: Book;

  constructor(book: Book) {
    this.book = book;
  }
}
