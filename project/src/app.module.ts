import { CoreModule } from '@codebit/core';
import { Module } from '@nestjs/common';

import Symbols from './symbols';
import { AppController } from './app.controller';
import { BookCreator } from '~library/domain/application/book-creator';
import { BookDummyRepository } from '~library/domain/infrastructure/persistence/dummies/book.dummy.repository';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [
    {
      provide: Symbols.BookCreator,
      useClass: BookCreator,
    },
    {
      provide: Symbols.IBookRepository,
      useClass: BookDummyRepository,
    },
  ],
})
export class AppModule {}
