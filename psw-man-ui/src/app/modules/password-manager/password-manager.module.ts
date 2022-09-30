import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PasswordManagerCardComponent } from './password-manager-list/password-manager-card/password-manager-card.component';
import { PasswordManagerHttpService } from './services/password-manager-http.service';
import { PasswordManagerListComponent } from './password-manager-list/password-manager-list.component';
import { PasswordManagerRoutingModule } from './password-manager-router.module';

@NgModule({
  declarations: [
    PasswordManagerListComponent,
    PasswordManagerCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PasswordManagerRoutingModule
  ],
  providers: [
    PasswordManagerHttpService,
  ]
})
export class PasswordManagerModule { }
