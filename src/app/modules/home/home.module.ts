import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '@app/modules/home/home/home.component';
import { CartComponent } from '@app/modules/home/cart/cart.component';
import { ProductsComponent } from '@app/modules/home/products/products.component';
import { ProductDetailComponent } from '@app/modules/home/products/product-detail/product-detail.component';
import { CartProviders } from '@app/modules/home/cart/state';
import { ProductProviders, ProductQuery, ProductStore } from '@app/modules/home/products/state';

@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    ...CartProviders,
    ...ProductProviders
  ]
})
export class HomeModule {
  constructor(
    private productQuery: ProductQuery,
    private productStore: ProductStore
  ) {
    if (productQuery.getCount() === 0) {
      for (let i = 1; i < 10; i++) {
        productStore.add({
          id: i,
          description: `desc desc desc desc desc ${i}`,
          title: `title ${i}`,
          price: i,
          image: 'assets/images/product_image.png'
        });
      }
    }
  }
}
