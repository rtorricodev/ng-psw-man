import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { NgModule } from '@angular/core';
import { PasswordManagerCardComponent } from './password-manager-list/password-manager-card/password-manager-card.component';
import { PasswordManagerFormComponent } from './password-manager-form/password-manager-form.component';
import { PasswordManagerHttpService } from './services/password-manager-http.service';
import { PasswordManagerListComponent } from './password-manager-list/password-manager-list.component';
import { PasswordManagerRoutingModule } from './password-manager-router.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        PasswordManagerRoutingModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordManagerListComponent,
        PasswordManagerCardComponent,
        PasswordManagerFormComponent
    ],
    providers: [PasswordManagerHttpService]
})
export class PasswordManagerModule {}
