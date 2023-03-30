import { Users } from './../../services/users';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, public service: UsersService, private router: Router) { }

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
          this.router.navigate(['/dashboard-insecure'])
        } else {
          alert('Usuário não localizado. Cadastre-se!')
          this.router.navigate([''])
        }
      },
      error: (err) => {
        alert(err)
      }
    })
  }
}
