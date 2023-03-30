import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsersModel } from './../../services/users-model';
import { Users } from './../../services/users';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registration-form-insecure',
  templateUrl: './registration-form-insecure.component.html',
  styleUrls: ['./registration-form-insecure.component.css']
})
export class RegistrationFormInsecureComponent {

  registrationInsecureForm!: FormGroup;

  title: string = '';
  message: string = '';

  constructor(private fb: FormBuilder, public service: UsersService, private router: Router, public dialog: MatDialog) { }

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

  public registerDataForm(): void {
    const dataUser = this.registrationInsecureForm.value;

    const user = new UsersModel(
      dataUser.name,
      dataUser.birthday,
      dataUser.cpf,
      dataUser.phone,
      dataUser.email,
      dataUser.password,
    )

    this.createUser(user)
  }

  public createUser(user: UsersModel): void {
    this.service.newUser(user).subscribe({
      next: () => {
        this.router.navigate(['/confirm-insecure-registration'])
      },
      error: (err) => {
        this.title = 'Não foi possível concluir o cadastro'
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
