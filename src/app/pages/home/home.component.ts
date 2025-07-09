import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importe os componentes necessários
import { CardsUsuariosComponent } from '../cards-usuarios/cards-usuarios.component';
import { CardsEstabelecimentosComponent } from '../cards-estabelecimentos/cards-estabelecimentos.component';

@Component({
  selector: 'app-home',
  standalone: true,                     // OBRIGATÓRIO!
  imports: [
    CommonModule,
    CardsUsuariosComponent,
    CardsEstabelecimentosComponent
  ],              // OBRIGATÓRIO!
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  // CORRETO!
})
export class HomeComponent {
  // Imagens do carrossel (coloque as imagens na pasta public/assets/carrossel/)
  carouselImages = [

    '/assets/sitio1.jpg',
    '/assets/sitio2.jpg',
    '/assets/bar1.jpg'
  ];

  // Usuários fictícios
  usuarios = [
    {
      id: '1',
      nome: 'Ana Clara',
      fotoUrl: '/assets/mulher1.jpg',
      genero: 'Feminino',
      dataNascimento: '1995-04-12',
      localizacao: 'São Paulo, SP',
      miniBio: 'Apaixonada por música e viagens.',
      interesses: ['música', 'viagens', 'cinema', 'arte']
    },
    {
      id: '2',
      nome: 'Lucas Silva',
      fotoUrl: 'a/assets/mulher2.jpg',
      genero: 'Masculino',
      dataNascimento: '1990-09-25',
      localizacao: 'Rio de Janeiro, RJ',
      miniBio: 'Amo esportes e tecnologia.',
      interesses: ['futebol', 'tecnologia', 'praia']
    },
    {
      id: '3',
      nome: 'Mariana Souza',
      fotoUrl: '/assets/mulher3.jpg',
      genero: 'Feminino',
      dataNascimento: '1998-01-08',
      localizacao: 'Belo Horizonte, MG',
      miniBio: 'Leitora voraz e fã de café.',
      interesses: ['livros', 'café', 'fotografia']
    }
  ];

  // Estabelecimentos fictícios (ajuste conforme seu componente espera)
  estabelecimentos = [
    {
      id: '1',
      nome: 'Bar do Zé',
      fotoUrl: 'assets/boate1.jpg',
      categoria: 'Bar',
      endereco: 'Rua das Flores, 123',
      descricao: 'O melhor bar da cidade!'
    },
    {
      id: '2',
      nome: 'Café Central',
      fotoUrl: '/assets/boate2.jpg',
      categoria: 'Café',
      endereco: 'Av. Brasil, 456',
      descricao: 'Cafés especiais e ambiente aconchegante.'
    },
    {
      id: '3',
      nome: 'Pizzaria Itália',
      fotoUrl: '/assets/boate3.jpg',
      categoria: 'Pizzaria',
      endereco: 'Praça Itália, 789',
      descricao: 'Pizzas artesanais e clima familiar.'
    }
  ];
}
