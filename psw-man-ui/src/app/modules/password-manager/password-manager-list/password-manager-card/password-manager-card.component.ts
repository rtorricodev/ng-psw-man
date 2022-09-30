import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-manager-card',
  templateUrl: './password-manager-card.component.html',
  styleUrls: ['./password-manager-card.component.scss']
})
export class PasswordManagerCardComponent implements OnInit {
  @Input() name: string = "";
  @Input() url: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
