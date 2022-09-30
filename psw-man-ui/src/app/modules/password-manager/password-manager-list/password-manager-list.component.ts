import { Observable, filter, of, switchMap, take, tap } from 'rxjs';

import { Component } from '@angular/core';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { PasswordCard } from '../interfaces/PasswordCard';
import { PasswordManagerFormComponent } from './../password-manager-form/password-manager-form.component';
import { PasswordManagerHttpService } from '../services/password-manager-http.service';

@Component({
  selector: 'app-password-manager-list',
  templateUrl: './password-manager-list.component.html',
  styleUrls: ['./password-manager-list.component.css'],
})
export class PasswordManagerListComponent {

  passwordCards$: Observable<PasswordCard[]> = this.httpService.getPasswordsCards();

  constructor(
    public dialog: MatDialog,
    private httpService: PasswordManagerHttpService,
  ) { }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(PasswordManagerFormComponent,{ data: { title: "Create New Password" }});

    dialogRef.afterClosed()
    .pipe(
      filter((passwordCard: PasswordCard) => !! passwordCard),
      switchMap((passwordCard: PasswordCard ) => this.httpService.savePasswordCard(passwordCard)),
      filter((res : { payload?: PasswordCard, message: string }) => res.payload !== undefined),
      tap(() =>  this.passwordCards$ = this.httpService.getPasswordsCards()),
    ).subscribe()
  }

  openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, { data: { message: "Are you sure do delete it ?" }})

    dialogRef.afterClosed()
    .pipe(
      filter((confirmation: boolean | undefined) => !!confirmation),
      switchMap(() => this.httpService.deletePasswordCard(id)),
      filter((response: { message: string, error: boolean} ) => !response.error),
      tap(() => this.passwordCards$ = this.httpService.getPasswordsCards()),
    ).subscribe()
  }

  openEditDialog(): void {
    console.log('edit');
  }
  

}
