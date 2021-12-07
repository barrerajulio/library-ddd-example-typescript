import { Controller, Get, Inject } from '@nestjs/common';

import Symbols from './symbols';
import { BookCreator } from './library/domain/application/book-creator';

@Controller()
export class AppController {
  @Inject(Symbols.BookCreator)
  private bookCreator!: BookCreator;

  @Get()
  async getHello(): Promise<string> {
    await this.bookCreator.run('New book');
    return '';
  }
}
