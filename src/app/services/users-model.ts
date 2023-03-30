export class UsersModel {
  name: string;
  birthday: string;
  cpf: string;
  phone: string;
  email: string;
  password: string;
  id?: number;

  constructor(name: string, birthday: string, cpf: string, phone: string, email: string, password: string, id?: number) {
    this.name = name;
    this.birthday = birthday;
    this.cpf = cpf;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.id = id;
  }
}
