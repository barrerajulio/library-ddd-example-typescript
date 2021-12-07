import { Inject } from '@nestjs/common';

import Symbols from 'src/symbols';
import { Book } from '../model/book/book';
import { BookId } from '../model/book/book-id';
import { BookName } from '../model/book/book-name';
import { BookResponse } from './book-response';
import { IBookRepository } from '../model/book/book-repository';

export class BookCreator {
  @Inject(Symbols.IBookRepository)
  private bookRepository!: IBookRepository;

  async run(name: string): Promise<BookResponse> {
    const book = new Book(new BookId(), new BookName(name));
    await this.bookRepository.store(book);
    return new BookResponse(book);
  }
}
