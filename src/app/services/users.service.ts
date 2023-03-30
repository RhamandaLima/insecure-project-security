import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:3000/users');
  }

  public newUser(body: Users): Observable<Users[]> {
    return this.http.post<Users[]>('http://localhost:3000/users', body);
  }
}
