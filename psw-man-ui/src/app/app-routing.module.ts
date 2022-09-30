import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "",
    redirectTo: "password-manager",
    pathMatch: "full"
  },
  {
    path: "password-manager",
    loadChildren: () => import("./modules/password-manager.module").then(m => m.PasswordManagerModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
