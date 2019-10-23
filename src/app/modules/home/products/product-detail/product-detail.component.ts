import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductQuery } from '@app/modules/home/products/state';
import { CartService } from '@app/modules/home/cart/state';

@Component({
  selector: 'shop-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = this.productQuery.getEntity(this.route.snapshot.params.id);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productQuery: ProductQuery,
    private cartService: CartService,
  ) {
    console.log();
  }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.cartService.addCartItem(product)
    .subscribe(
      response => this.router.navigate(['/'])
    );
  }
}
