import { Component, OnInit } from '@angular/core';
import { Observable, filter, of, switchMap, take, tap } from 'rxjs';

import { CreateEditPasswordCardComponent } from '../create-edit-password-card/create-edit-password-card.component';
import { FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { PasswordCard } from '../interfaces/PasswordCard';
import { PasswordManagerHttpService } from '../services/password-manager-http.service';

@Component({
  selector: 'app-password-manager-list',
  templateUrl: './password-manager-list.component.html',
  styleUrls: ['./password-manager-list.component.scss'],
})
export class PasswordManagerListComponent implements OnInit {

  passwordCards$: Observable<PasswordCard[]> = of([]);

  constructor(
    public dialog: MatDialog,
    private httpService: PasswordManagerHttpService,
  ) { }

  ngOnInit(): void {
    this.passwordCards$ = this.httpService.getPasswordsCards();
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateEditPasswordCardComponent,{ data: { title: "Create new Password", isCreate: true }});

    dialogRef.afterClosed().pipe(
      filter((passwordCard: PasswordCard) => !! passwordCard),
      switchMap((passwordCard: PasswordCard ) => this.httpService.savePasswordCard(passwordCard)),
      filter((res : { payload?: PasswordCard, message: string }) => res.payload !== undefined),
      tap(() =>  this.passwordCards$ = this.httpService.getPasswordsCards()),
    ).subscribe()
  }

}
