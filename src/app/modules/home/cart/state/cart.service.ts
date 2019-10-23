import { ID } from '@datorama/akita';
import { CartStore } from './cart.store';
import { Inject, Injectable } from '@angular/core';
import { Cart } from '@app/modules/home/cart/state';
import { Observable, of } from 'rxjs';

@Injectable()
export class CartService {

  constructor(private cartStore: CartStore) {
  }

  addCartItem(cartItem: Cart): Observable<any> {
    this.cartStore.add(cartItem);
    return of([]);
  }

}
