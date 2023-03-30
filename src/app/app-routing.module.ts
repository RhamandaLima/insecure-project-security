import { DashboardInsecureComponent } from './pages/dashboard-insecure/dashboard-insecure.component';
import { RegistrationConfirmationInsecureComponent } from './pages/registration-confirmation-insecure/registration-confirmation-insecure.component';
import { RegistrationFormInsecureComponent } from './pages/registration-form-insecure/registration-form-insecure.component';
import { WelcomeInsecureComponent } from './pages/welcome-insecure/welcome-insecure.component';
import { HomeInsecureComponent } from './pages/home-insecure/home-insecure.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginInsecureComponent } from './pages/login-insecure/login-insecure.component';

const routes: Routes = [
  {
    path: '',
    component: HomeInsecureComponent,
    children: [
      {
        path: '',
        component: WelcomeInsecureComponent,
      },
      {
        path: 'insecure-registration-form',
        component: RegistrationFormInsecureComponent,
      },
      {
        path: 'confirm-insecure-registration',
        component: RegistrationConfirmationInsecureComponent,
      },
      {
        path: 'login-insecure',
        component: LoginInsecureComponent,
      },
      {
        path: 'dashboard-insecure',
        component: DashboardInsecureComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
