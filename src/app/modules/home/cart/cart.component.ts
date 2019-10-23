import { Component, OnInit } from '@angular/core';
import { CartQuery, Cart as CartItem } from '@app/modules/home/cart/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]> = this.cartQuery.selectAll();
  cartCount$: Observable<number> = this.cartQuery.selectCount();
  totalPrice$: Observable<number> = this.cartQuery.totalPrice();

  constructor(
    private cartQuery: CartQuery
  ) {
  }

  ngOnInit() {
  }

}
