import { BookId } from './book-id';
import { BookName } from './book-name';

export class Book {
  readonly id: BookId;
  readonly name: BookName;

  constructor(id: BookId, name: BookName) {
    this.id = id;
    this.name = name;
  }
}
