import { Book } from '~library/domain/model/book/book';
import { IBookRepository } from '~library/domain/model/book/book-repository';

export class BookDummyRepository implements IBookRepository {
  async store(book: Book): Promise<void> {
    console.log('store dummy', book);
  }
}
