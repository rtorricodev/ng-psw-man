import { PasswordCard } from '../interfaces/PasswordCard';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogModule } from '@angular/material/legacy-dialog';
import { ClipboardService } from 'ngx-clipboard';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-psw-man-form',
    templateUrl: './password-manager-form.component.html',
    standalone: true,
    imports: [MatLegacyDialogModule, FormsModule, ReactiveFormsModule, NgIf, NgClass]
})
export class PasswordManagerFormComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    url: new FormControl('', []),
    username: new FormControl('', []),
    password: new FormControl('', [Validators.required]),
    folder: new FormControl('', []),
  });

  passwordType: string = 'password';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; passwordCard: PasswordCard },
    private clipboardApi: ClipboardService
  ) {
    if (data.passwordCard) {
      this.form.get('name')?.setValue(data.passwordCard.name);
      this.form.get('url')?.setValue(data.passwordCard.url);
      this.form.get('username')?.setValue(data.passwordCard.username);
      this.form.get('password')?.setValue(data.passwordCard.password);
      this.form.get('folder')?.setValue(data.passwordCard.folder);
    }
  }

  confirm(): null | PasswordCard {
    if (this.form.valid) {
      return this.form.value;
    }
    return null;
  }

  copyPassword(): void {
    this.clipboardApi.copyFromContent(this.form.get('password')?.value);
  }

  cahngePasswordFieldType(): void {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
