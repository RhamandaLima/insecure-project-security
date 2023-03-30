import { Users } from './../../services/users';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-login-insecure',
  templateUrl: './login-insecure.component.html',
  styleUrls: ['./login-insecure.component.css']
})
export class LoginInsecureComponent {

  loginForm!: FormGroup;

  email: string = '';
  password: string = '';

  users: any;
  findUser: any;

  title: string = '';
  message: string = '';

  constructor(private fb: FormBuilder, public service: UsersService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  public createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public Login(): any {
    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;

    this.service.getUsers().subscribe({
      next: (response) => {
        this.users = response;
        this.findUser = this.users.find((user: Users) => user.email == this.email)

        if (this.findUser) {
          this.router.navigate(['/dashboard-insecure'], { queryParams: { id: this.findUser.id, login: this.findUser.email, password: this.findUser.password } })
        } else {
          this.title = 'Usuário não localizado'
          this.message = 'Realize o seu cadastro.';
          this.openDialog(this.title, this.message);
          this.router.navigate(['/insecure-registration-form'])
        }
      },
      error: (err) => {
        this.title = 'Usuário não localizado'
        this.message = err;
        this.openDialog(this.title, this.message);
      }
    })
  }

  public openDialog(title: string, message: string): void {
    this.dialog.open(DialogComponent, {
      data: { title: title, message: message }
    })
  }
}
