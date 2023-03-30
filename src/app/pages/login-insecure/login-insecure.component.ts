import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-insecure',
  templateUrl: './login-insecure.component.html',
  styleUrls: ['./login-insecure.component.css']
})
export class LoginInsecureComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

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

  }
}
