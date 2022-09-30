import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  savePasswordCard(passwordCard: PasswordCard): Observable<{ payload: PasswordCard, message: string}> {
    return this.httpClient.post<{ payload: PasswordCard, message: string}>(`${environment.apiUrl}/password-cards`, passwordCard);
  }

  deletePasswordCard(id: string): Observable<{ message: string, error: boolean}> {
    return this.httpClient.delete<{ message: string, error: boolean}>(`${environment.apiUrl}/password-cards/${id}`)
  }

}
