import { Component, Output } from '@angular/core';
import { MenuItem } from '@shared/components/navbar/navbar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';

  @Output() menuItems: MenuItem[] = [
    { title: 'Home', url: '/home' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ];
}
