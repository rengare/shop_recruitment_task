import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <shop-card>
    <i class="far fa-address-book"></i>
    <h1>About</h1>
    <p>
      description 
      description 
      description 
      description 
      description 
      description 
      description 
      description 
    </p>
  </shop-card>
  `
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
