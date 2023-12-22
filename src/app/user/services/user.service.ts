// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.model';


@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  private apiUrl = 'https://fakestoreapi.com/users';
  private loginUrl = 'https://fakestoreapi.com/auth/login';

  constructor(private http: HttpClient) {}


  loginUser(username: string, password: string): Observable<any> {
    // Les détails de la demande de connexion dépendront de l'API spécifique.
    // Vous devrez peut-être ajuster le format des données envoyées.
    const loginData = {
      username: username,
      password: password,
    };

    return this.http.post(this.loginUrl, loginData);
  }


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getSingleUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  sortUsersDescending(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?sort=desc`);
  }

  addNewUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
