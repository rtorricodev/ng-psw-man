import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header.component';

@Component({
    selector: 'app-root',
    template: `
      <app-header></app-header>
      <router-outlet></router-outlet>
    `,
    standalone: true,
    imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'psw-man-ui';
}
