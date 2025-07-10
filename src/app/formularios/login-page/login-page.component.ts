import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup,FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule], // ✅ Importação obrigatória
  providers: [AuthService]
})
export class LoginPageComponent {
 usuario: string = '';
 senha: string = '';
 erro: boolean = false;


 constructor(private auth: AuthService, private router: Router) {}
 entrar() {
 if (this.auth.login(this.usuario, this.senha)) {
 this.router.navigate(['/home']);
 }

 else {
 this.erro = true;
 }
 }
}
