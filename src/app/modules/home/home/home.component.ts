import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
  <div class="container-fluid">
  <div class="row">
    
    <div class="col-md-4 cart-container">
      <shop-cart></shop-cart>
    </div>

    <div class="col-md-8 routing-container">
      <router-outlet></router-outlet>
    </div>
    
  </div>

</div>
`
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
