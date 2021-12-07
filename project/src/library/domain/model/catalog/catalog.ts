import { AggregateRoot } from '~shared/domain/aggregate-root';
import { Book } from '../book/book';

export class Catalog extends AggregateRoot {
  books: Book[];
}
