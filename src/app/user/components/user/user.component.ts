// user.component.ts
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/User.model';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user!: User;

  constructor(private userService: UserService) { }

  addUser(user: User): void {
    this.userService.addNewUser(user).subscribe(
      (response) => {
        // Gérer la réponse du service (par exemple, afficher un message de succès).
        console.log('User added successfully:', response);
      },
      (error) => {
        // Gérer les erreurs d'ajout d'utilisateur ici.
        console.error('Failed to add user:', error);
      }
    );
  }
}
