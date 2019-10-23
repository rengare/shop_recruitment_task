import { NgModule } from '@angular/core';
import { AppStateDefaults } from './state';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@shared/components/card/card.component';

const Componnets = [
    NavbarComponent,
    CardComponent
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ...Componnets,
    ],
    declarations: [
        ...Componnets,
    ],
    providers: [
        ...AppStateDefaults
    ],
})
export class SharedModule { }
