import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-password-manager-card',
  templateUrl: './password-manager-card.component.html',
  styleUrls: ['./password-manager-card.component.css'],
})
export class PasswordManagerCardComponent {
  @Input() name: string = '';
  @Input() url: string = '';
  @Output() deleteClickedEvent: EventEmitter<void> = new EventEmitter();
  @Output() editClieckedEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  emitDeleteEvent(): void {
    this.deleteClickedEvent.emit();
  }

  emitEditEvent(): void {
    this.editClieckedEvent.emit();
  }
}
