import { QueryEntity } from '@datorama/akita';
import { ProductStore, ProductState, } from './product.store';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { CartQuery } from '@app/modules/home/cart/state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductQuery extends QueryEntity<ProductState, Product> {

  constructor(
    protected store: ProductStore,
    private cartQuery: CartQuery
  ) {
    super(store);
  }

  selectAllExcludingCartItems(): Observable<Product[]> {
    return this.selectAll()
      .pipe(
        map(products => products.filter(product => !this.cartQuery.getEntity(product.id)))
      )
  }

}
