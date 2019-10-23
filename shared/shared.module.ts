import { NgModule } from '@angular/core';
import { AppStateDefaults } from './state';

@NgModule({
    imports: [

    ],
    exports: [
    ],
    declarations: [
        ...AppStateDefaults
    ],
    providers: [
        ...AppStateDefaults
    ],
})
export class SharedModule { }
