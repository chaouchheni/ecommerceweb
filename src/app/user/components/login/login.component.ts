// login.component.ts
import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }

  login(email: string, password: string): void {
    this.userService.loginUser(email, password).subscribe(
      (response) => {
        // Si la connexion est réussie, redirigez vers le composant AllProducts
        this.router.navigate(['/allproducts']);
      },
      (error) => {
        // Gérer les erreurs de connexion ici (par exemple, afficher un message d'erreur).
        console.error('Login failed:', error);
      }
    );
  }
}
