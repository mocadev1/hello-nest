import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

/**
 * This service will be responsible for data storage and retrieval,
 * and maybe it will be a provider.
 */
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
