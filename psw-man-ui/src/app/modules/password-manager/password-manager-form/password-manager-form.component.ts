import { PasswordCard } from '../interfaces/PasswordCard';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-psw-man-form',
  templateUrl: './password-manager-form.component.html',
  styleUrls: ['./password-manager-form.component.css']
})
export class PasswordManagerFormComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    url: new FormControl("",[]),
    username: new FormControl("", []),
    password: new FormControl("",[Validators.required]),
    folder: new FormControl("",[])
  });

  passwordType: string = 'password';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string },
    private clipboardApi: ClipboardService
  ) { }

  confirm(): null | PasswordCard {
    if(this.form.valid) {
      return this.form.value;
    }
    return null;
  }

  copyPassword(): void {
    this.clipboardApi.copyFromContent(this.form.get('password')?.value)
  }

  cahngePasswordFieldType(): void {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

}
