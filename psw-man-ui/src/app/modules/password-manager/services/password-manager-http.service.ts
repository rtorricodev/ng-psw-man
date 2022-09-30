import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PasswordCard } from '../interfaces/PasswordCard';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PasswordManagerHttpService {
  
  private passwordCardApiUrl: string = `${environment.apiUrl}/password-cards`;

  constructor(private httpClient: HttpClient) {}

  getPasswordsCards(): Observable<PasswordCard[]> {
    return this.httpClient.get<PasswordCard[]>(
      `${environment.apiUrl}/password-cards`
    );
  }

  savePasswordCard(
    passwordCard: PasswordCard
  ): Observable<{ payload: PasswordCard; message: string }> {
    return this.httpClient.post<{ payload: PasswordCard; message: string }>(
      this.passwordCardApiUrl,
      passwordCard
    );
  }

  deletePasswordCard(
    id: string
  ): Observable<{ message: string; error: boolean }> {
    return this.httpClient.delete<{ message: string; error: boolean }>(
      `${this.passwordCardApiUrl}/${id}`
    );
  }

  updatePasswordCard(
    id: string,
    passwordCard: PasswordCard
  ): Observable<{ payload: PasswordCard; message: string }> {
    return this.httpClient.put<{ payload: PasswordCard; message: string }>(
      `${this.passwordCardApiUrl}/${id}`,
      passwordCard
    );
  }
}
