import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
})
export class CoreModule { }
