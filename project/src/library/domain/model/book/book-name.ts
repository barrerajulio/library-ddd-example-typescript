export class BookName {
  readonly value: string;

  constructor(name: string) {
    this.value = name;
  }

  equals(book: BookName): boolean {
    return this.value === book.value;
  }

  toString(): string {
    return this.value;
  }
}
