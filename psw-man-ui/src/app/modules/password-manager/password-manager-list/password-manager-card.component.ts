import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-password-manager-card',
    template: `
      <div class="h-52 bg-white rounded-md m-5 drop-shadow-sm">
        <div class="p-8">
          <h3 class="text-indigo-800 font-bold text-lg">{{ name }}</h3>
          <p class="text-slate-800 font-thin">{{ url }}</p>
        </div>
        <div class="m-8">
          <button
            (click)="emitEditEvent()"
            class="py-2 px-5 bg-indigo-500 text-white rounded-md"
          >
            ✏️ Edit
          </button>
          <button
            (click)="emitDeleteEvent()"
            class="py-2 px-5 ml-2 bg-red-600 text-white rounded-md"
          >
            🗑 Delete
          </button>
        </div>
      </div>
    `,
    standalone: true
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
