import { Observable, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { PasswordCard } from '../interfaces/PasswordCard';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordManagerHttpService {

  constructor(private httpClient: HttpClient) { }

  getPasswordsCards(): Observable<PasswordCard[]> {
    return this.httpClient.get<PasswordCard[]>(`${environment.apiUrl}/password-cards`);
  }

}
