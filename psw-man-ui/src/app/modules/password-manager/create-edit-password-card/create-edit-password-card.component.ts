import { PasswordCard } from './../interfaces/PasswordCard';
import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-create-edit-password-card',
  templateUrl: './create-edit-password-card.component.html',
  styleUrls: ['./create-edit-password-card.component.scss']
})
export class CreateEditPasswordCardComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl("", []),
    url: new FormControl("",[]),
    username: new FormControl("", []),
    password: new FormControl("",[]),
    folder: new FormControl("",[])
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string, isCreate: boolean}) { }

  ngOnInit(): void {
  
    
  }

  confirm(): null | PasswordCard {
    if(this.form.valid) {
      return this.form.value;
    }
    return null;
  }

}
