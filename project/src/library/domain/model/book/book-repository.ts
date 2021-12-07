import { Book } from './book';

export interface IBookRepository {
  store(book: Book): Promise<void>;
}
