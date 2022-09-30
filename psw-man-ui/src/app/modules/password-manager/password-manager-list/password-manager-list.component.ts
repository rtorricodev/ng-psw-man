import { Component, OnInit } from '@angular/core';
import { Observable, of, take, tap } from 'rxjs';

import { PasswordCard } from '../interfaces/PasswordCard';
import { PasswordManagerHttpService } from '../services/password-manager-http.service';

@Component({
  selector: 'app-password-manager-list',
  templateUrl: './password-manager-list.component.html',
  styleUrls: ['./password-manager-list.component.scss'],
})
export class PasswordManagerListComponent implements OnInit {

  passwordCards$: Observable<PasswordCard[]> = of([]);

  constructor(private httpService: PasswordManagerHttpService) { }

  ngOnInit(): void {
    this.passwordCards$ = this.httpService.getPasswordsCards();
    
  }

}
