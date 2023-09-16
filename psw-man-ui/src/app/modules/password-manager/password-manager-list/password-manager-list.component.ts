import { Observable, filter, of, switchMap, take, tap } from 'rxjs';

import { Component } from '@angular/core';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { PasswordCard } from '../interfaces/PasswordCard';
import { PasswordManagerFormComponent } from './../password-manager-form/password-manager-form.component';
import { PasswordManagerHttpService } from '../services/password-manager-http.service';
import { PasswordManagerCardComponent } from './password-manager-card/password-manager-card.component';
import { NgFor, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-password-manager-list',
    templateUrl: './password-manager-list.component.html',
    styleUrls: ['./password-manager-list.component.css'],
    standalone: true,
    imports: [FormsModule, NgFor, PasswordManagerCardComponent, AsyncPipe]
})
export class PasswordManagerListComponent {
  passwordCards$: Observable<PasswordCard[]> =
    this.httpService.getPasswordsCards();

  searchNameCriteria: string = '';

  constructor(
    public dialog: MatDialog,
    private httpService: PasswordManagerHttpService
  ) {}

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(PasswordManagerFormComponent, {
      data: { title: 'Create New Password' },
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((passwordCard: PasswordCard) => !!passwordCard),
        switchMap((passwordCard: PasswordCard) =>
          this.httpService.savePasswordCard(passwordCard)
        ),
        filter(
          (res: { payload?: PasswordCard; message: string }) =>
            res.payload !== undefined
        ),
        tap(() => (this.passwordCards$ = this.httpService.getPasswordsCards())),
        take(1)
      )
      .subscribe();
  }

  openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: 'Are you sure to delete it ?', passwordCard: {} },
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((confirmation: boolean | undefined) => !!confirmation),
        switchMap(() => this.httpService.deletePasswordCard(id)),
        filter(
          (response: { message: string; error: boolean }) => !response.error
        ),
        tap(() => (this.passwordCards$ = this.httpService.getPasswordsCards())),
        take(1)
      )
      .subscribe();
  }

  openEditDialog(passwordCard: PasswordCard): void {
    const dialogRef = this.dialog.open(PasswordManagerFormComponent, {
      data: { title: 'Edit Password', passwordCard },
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((updatedPasswordCard: PasswordCard) => !!updatedPasswordCard),
        switchMap((updatedPasswordCard: PasswordCard) =>
          this.httpService.updatePasswordCard(passwordCard.id, {
            ...updatedPasswordCard,
            id: passwordCard.id,
          })
        ),
        filter(
          (res: { payload?: PasswordCard; message: string }) =>
            res.payload !== undefined
        ),
        tap(() => (this.passwordCards$ = this.httpService.getPasswordsCards())),
        take(1)
      )
      .subscribe();
  }

  filterByName(): void {
    if (this.searchNameCriteria === '') {
      this.passwordCards$ = this.httpService.getPasswordsCards();
    }
    this.passwordCards$
      .pipe(
        filter((passwordCards: PasswordCard[]) => !!passwordCards),
        tap((passwordCards: PasswordCard[]) => {
          const filterdList: PasswordCard[] = [];
          passwordCards.forEach((passwordCard: PasswordCard) => {
            if (
              passwordCard.name
                .toLowerCase()
                .includes(this.searchNameCriteria.toLowerCase())
            ) {
              filterdList.push(passwordCard);
            }
          });
          this.passwordCards$ = of(filterdList);
        }),
        take(1)
      )
      .subscribe();
  }
}
