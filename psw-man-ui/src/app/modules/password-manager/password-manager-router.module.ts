import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PasswordManagerListComponent } from './password-manager-list/password-manager-list.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordManagerListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordManagerRoutingModule {}
