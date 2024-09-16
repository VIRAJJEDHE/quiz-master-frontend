import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent,MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
