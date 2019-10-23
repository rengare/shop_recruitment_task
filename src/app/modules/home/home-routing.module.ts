import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/modules/home/home/home.component';
import { ProductsComponent } from '@app/modules/home/products/products.component';
import { ProductDetailComponent } from '@app/modules/home/products/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: ProductsComponent,
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
