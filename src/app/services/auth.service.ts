// Importa módulos necessários do Angular e RxJS
import { Injectable } from '@angular/core'; // Permite que a classe seja injetável (usada como serviço)
import { HttpClient } from '@angular/common/http'; // Permite fazer requisições HTTP
import { Observable } from 'rxjs'; // Permite trabalhar com respostas assíncronas

// Define a interface do formato de resposta do login
interface LoginResponse {
  token: string; // Token de autenticação recebido do backend
  usuario: {     // Dados do usuário autenticado
    id: number;
    nome: string;
    email: string;
  };
}

// Torna o serviço disponível em toda a aplicação
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL base do backend para autenticação (ajuste conforme necessário)
  private apiUrl = 'http://localhost:3000/auth'; // ajuste conforme IP/porta backend

  // Injeta o HttpClient no construtor para usar nas requisições
  constructor(private http: HttpClient) { }

  // Método para fazer login - envia email e senha para o backend e recebe um token
  login(credenciais: { email: string; senha: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credenciais);
  }

  // Método para logout - remove o token do armazenamento local
  logout(): void {
    localStorage.removeItem('token');
  }

  // Recupera o token do armazenamento local
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Verifica se o usuário está autenticado (se existe um token salvo)
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

