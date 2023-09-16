import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        ConfirmationDialogComponent
    ],
    exports: [
        ConfirmationDialogComponent,
    ]
})

export class SharedModule { }
