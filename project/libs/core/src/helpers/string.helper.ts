import { v4, validate } from 'uuid';

export class StringHelper {
  static generateUuid() {
    return v4();
  }

  static isValidUuid(value: string): boolean {
    return validate(value);
  }
}
