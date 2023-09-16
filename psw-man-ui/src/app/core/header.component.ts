import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
      <div class="w-full h-16 bg-indigo-900 flex items-center justify-center fixed z-10">
          <h1 class="text-white text-center text-xl">Password Manager</h1>
      </div>
    `,
    standalone: true
})
export class HeaderComponent {

  constructor() { }
}
