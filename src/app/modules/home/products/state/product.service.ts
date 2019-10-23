import { ID } from '@datorama/akita';
import { ProductStore, } from './product.store';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(
    private productStore: ProductStore
  ) { }

}