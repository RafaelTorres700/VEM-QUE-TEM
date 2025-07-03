import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [ReactiveFormsModule, HttpClientModule], // ✅ Importação obrigatória
  providers: [AuthService]
})
export class LoginPageComponent {
  formLogin: FormGroup;




  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.formLogin.valid) {
      const credenciais = this.formLogin.value;
      this.authService.login(credenciais).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          alert('Login realizado com sucesso!');
          // redirecionar conforme necessário
        },
        error: (err) => {
          alert('Falha no login: ' + (err.error?.erro || 'Erro desconhecido.'));
        }
      });
    }
  }



}
