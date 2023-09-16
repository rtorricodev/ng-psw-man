import { Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogModule } from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-confirmation-dialog',
    template:  `
      <mat-dialog-content>
        <p class="ml-5 mr-5">{{ data.message }}</p>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button
          mat-dialog-close
          class="py-2 px-5 bg-red-600 text-white rounded-md mr-2"
        >
          Cancel
        </button>
        <button
          [mat-dialog-close]="true"
          class="py-2 px-5 bg-indigo-500 text-white rounded-md"
        >
          Confirm
        </button>
      </mat-dialog-actions>
    `,
    standalone: true,
    imports: [MatLegacyDialogModule]
})
export class ConfirmationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
