import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form-insecure',
  templateUrl: './registration-form-insecure.component.html',
  styleUrls: ['./registration-form-insecure.component.css']
})
export class RegistrationFormInsecureComponent {

  registrationInsecureForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  public createRegistrationForm(): void {
    this.registrationInsecureForm = this.fb.group({
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      cpf: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public registerDataForm(): any {
  }

}
