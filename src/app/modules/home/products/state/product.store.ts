import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from './product.model';
import { Injectable } from '@angular/core';

export interface ProductState extends EntityState<Product> {}

@StoreConfig({ name: 'product' })
@Injectable()
export class ProductStore extends EntityStore<ProductState, Product> {

  constructor() {
    super();
  }

}

