import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { CreateEditPasswordCardComponent } from './create-edit-password-card/create-edit-password-card.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { NgModule } from '@angular/core';
import { PasswordManagerCardComponent } from './password-manager-list/password-manager-card/password-manager-card.component';
import { PasswordManagerHttpService } from './services/password-manager-http.service';
import { PasswordManagerListComponent } from './password-manager-list/password-manager-list.component';
import { PasswordManagerRoutingModule } from './password-manager-router.module';

@NgModule({
  declarations: [
    PasswordManagerListComponent,
    PasswordManagerCardComponent,
    CreateEditPasswordCardComponent
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
