import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: "",
      redirectTo: "password-manager",
      pathMatch: "full"
    },
    {
      path: "password-manager",
      loadChildren: () => import("./modules/password-manager/password-managet.routes").then(m => m.routes) 
    }
];