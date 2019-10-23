import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductQuery } from '@app/modules/home/products/state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = this.productQuery.selectAllExcludingCartItems();

  constructor(
    private productQuery: ProductQuery
  ) {
  }

  ngOnInit() {
  }

}
