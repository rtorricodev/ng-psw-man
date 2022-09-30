import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PasswordManagerListComponent } from './password-manager/password-manager-list/password-manager-list.component';
import { PasswordManagerRoutingModule } from './password-manager-router.module';

@NgModule({
  declarations: [PasswordManagerListComponent],
  imports: [
    CommonModule,
    PasswordManagerRoutingModule
  ]
})
export class PasswordManagerModule { }
