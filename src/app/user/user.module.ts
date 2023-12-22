import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';




@NgModule({
  declarations: [
   
  
   
  
    UserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ]
})
export class UserModule { }
