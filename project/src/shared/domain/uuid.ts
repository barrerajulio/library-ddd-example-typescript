import { StringHelper } from '@codebit/core';

import { InvalidArgumentException } from './invalid-argument-exception';

export class Uuid {
  protected _id: string;

  constructor(id?: string) {
    this.ensureIsValid(id);
    this._id = id || StringHelper.generateUuid();
  }

  get id(): string {
    return this._id;
  }

  equals(uuid: Uuid): boolean {
    return uuid.id === this.id;
  }

  toString(): string {
    return this.id;
  }

  private ensureIsValid(value?: string): void {
    if (value && !StringHelper.isValidUuid(value)) {
      throw new InvalidArgumentException('Invalid uuid argument');
    }
  }
}
