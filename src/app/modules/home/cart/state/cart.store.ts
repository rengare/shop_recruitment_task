import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

export interface CartState extends EntityState<Cart> {}

@StoreConfig({ name: 'cart' })
@Injectable()
export class CartStore extends EntityStore<CartState, Cart> {

  constructor() {
    super();
  }

}
