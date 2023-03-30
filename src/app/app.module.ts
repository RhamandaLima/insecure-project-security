import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeInsecureComponent } from './pages/home-insecure/home-insecure.component';
import { WelcomeInsecureComponent } from './pages/welcome-insecure/welcome-insecure.component';
import { RegistrationFormInsecureComponent } from './pages/registration-form-insecure/registration-form-insecure.component';
import { RegistrationConfirmationInsecureComponent } from './pages/registration-confirmation-insecure/registration-confirmation-insecure.component';
import { LoginInsecureComponent } from './pages/login-insecure/login-insecure.component';
import { DashboardInsecureComponent } from './pages/dashboard-insecure/dashboard-insecure.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeInsecureComponent,
    WelcomeInsecureComponent,
    RegistrationFormInsecureComponent,
    RegistrationConfirmationInsecureComponent,
    LoginInsecureComponent,
    DashboardInsecureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
