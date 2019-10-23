import { QueryEntity } from '@datorama/akita';
import { CartStore, CartState } from './cart.store';
import { Cart } from './cart.model';
import { Observable } from 'rxjs';
import { reduce, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class CartQuery extends QueryEntity<CartState, Cart> {

  constructor(protected store: CartStore) {
    super(store);
  }

  totalPrice(): Observable<number> {
    return this.selectAll()
      .pipe(
        map((cartItems: Cart[]) => cartItems.reduce((sum, item) => sum + item.price, 0))
      );
  }
}
