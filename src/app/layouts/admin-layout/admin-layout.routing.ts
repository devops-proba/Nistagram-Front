import { Routes } from "@angular/router";

import { LoginComponent } from "src/app/pages/auth/login/login.component";
import { RegistrationConfirmationComponent } from "src/app/pages/auth/registration-confirmation/registration-confirmation.component";
import { RegistrationComponent } from "src/app/pages/auth/registration/registration.component";
import { NistagramComponent } from "src/app/pages/nistagram/nistagram.component";

export const AdminLayoutRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },  
  { path: "nistagram", component: NistagramComponent },
  {
    path: 'registration/confirmation/:token',
    component: RegistrationConfirmationComponent
  },

];
