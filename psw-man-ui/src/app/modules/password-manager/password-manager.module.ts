import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { PasswordManagerCardComponent } from './password-manager-list/password-manager-card/password-manager-card.component';
import { PasswordManagerFormComponent } from './password-manager-form/password-manager-form.component';
import { PasswordManagerHttpService } from './services/password-manager-http.service';
import { PasswordManagerListComponent } from './password-manager-list/password-manager-list.component';
import { PasswordManagerRoutingModule } from './password-manager-router.module';

@NgModule({
  declarations: [
    PasswordManagerListComponent,
    PasswordManagerCardComponent,
    PasswordManagerFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PasswordManagerRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PasswordManagerHttpService,
  ]
})
export class PasswordManagerModule { }
