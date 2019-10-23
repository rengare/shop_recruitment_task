import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@shared/components/navbar/navbar.model';

@Component({
    selector: 'shop-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @Input() menuItems: MenuItem[];

    constructor() { }

    ngOnInit() { }
}