import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        BrowserModule,
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    providers: []
})
export class CoreModule { }
