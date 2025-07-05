import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "../layout/footer/footer.component";
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { CardsUsuariosComponent } from "./pages/cards-usuarios/cards-usuarios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    CardsUsuariosComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vqtDoZero';

  // Array com três usuários para teste
  usuarios = [
    {
      id: '1',
      nome: 'Camila Silva',
      fotoUrl: '/assets/mulher3.jpg',
      genero: 'Feminino',
      localizacao: 'São Paulo, SP',
      miniBio: 'Olá, sou a Camila! Adoro viajar, conhecer pessoas novas e praticar yoga. Procuro alguém para compartilhar bons momentos.',
      dataNascimento: new Date('1983-03-15')
    },
    {
      id: '2',
      nome: 'João Santos',
      fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      genero: 'Masculino',
      localizacao: 'Rio de Janeiro, RJ',
      miniBio: 'Sou engenheiro, gosto de esportes e música. Sempre disposto a uma boa conversa e novas aventuras!',
      dataNascimento: new Date('1992-08-22')
    },
    {
      id: '3',
      nome: 'Ana Costa',
      fotoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      genero: 'Feminino',
      localizacao: 'Belo Horizonte, MG',
      miniBio: 'Professora apaixonada por livros e cinema. Procuro alguém que compartilhe dos mesmos interesses e valores.',
      dataNascimento: new Date('1990-11-10')
    }
  ];

  onUserCurtir(event: any) {
    console.log('Usuário curtido:', event);
    const usuario = this.usuarios.find(u => u.id === event);
    if (usuario) {
      console.log(`Você curtiu ${usuario.nome}!`);
    }
  }

  onUserConvidar(event: any) {
    console.log('Usuário convidado:', event);
    const usuario = this.usuarios.find(u => u.id === event);
    if (usuario) {
      console.log(`Você convidou ${usuario.nome}!`);
    }
  }
}
