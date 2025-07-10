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

    
    '/assets/bar1.jpg',
    '/assets/boate1.jpg',
    '/assets/boate2.jpg',
    'assets/boate3.',
    '/assets/mulher3.jpg',
    '/assets/churrascaria1.jpg',
    '/assets/padaria1.jpg',
    '/assets/sitio3.jpeg'

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
      fotoUrl: '/assets/homem1.jpg',
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
    },
    {
      id: '4',
      nome: 'Pedro Henrique',
      fotoUrl: '/assets/homem2.jpg',
      genero: 'Masculino',
      dataNascimento: '1988-07-15',
      localizacao: 'Curitiba, PR',
      miniBio: 'Cozinheiro amador e ciclista.',
      interesses: ['culinária', 'ciclismo', 'filmes']
    },
    {
      id: '5',
      nome: 'Juliana Alves',
      fotoUrl: '/assets/mulher4.jpg',
      genero: 'Feminino',
      dataNascimento: '1992-11-30',
      localizacao: 'Salvador, BA',
      miniBio: 'Dançarina e amante do mar.',
      interesses: ['dança', 'praia', 'fotografia']
    },
    {
      id: '6',
      nome: 'Rafael Costa',
      fotoUrl: '/assets/homem3.jpg',
      genero: 'Masculino',
      dataNascimento: '1996-03-22',
      localizacao: 'Porto Alegre, RS',
      miniBio: 'Apaixonado por esportes radicais.',
      interesses: ['escalada', 'surf', 'aventura']
    },
    {
      id: '7',
      nome: 'Camila Rocha',
      fotoUrl: '/assets/mulher5.jpg',
      genero: 'Feminino',
      dataNascimento: '1994-06-18',
      localizacao: 'Fortaleza, CE',
      miniBio: 'Fotógrafa e viajante.',
      interesses: ['fotografia', 'viagens', 'natureza']
    },
    {
      id: '8',
      nome: 'Thiago Lima',
      fotoUrl: '/assets/homem4.jpg',
      genero: 'Masculino',
      dataNascimento: '1985-12-05',
      localizacao: 'Brasília, DF',
      miniBio: 'Gamer e fã de tecnologia.',
      interesses: ['games', 'tecnologia', 'cinema']
    },
    {
      id: '9',
      nome: 'Beatriz Mendes',
      fotoUrl: '/assets/mulher6.jpg',
      genero: 'Feminino',
      dataNascimento: '1999-08-27',
      localizacao: 'Recife, PE',
      miniBio: 'Estudante de medicina e voluntária.',
      interesses: ['medicina', 'voluntariado', 'música']
    },
    {
      id: '10',
      nome: 'Felipe Torres',
      fotoUrl: '/assets/homem5.jpg',
      genero: 'Masculino',
      dataNascimento: '1993-02-14',
      localizacao: 'Manaus, AM',
      miniBio: 'Amante da natureza e esportes aquáticos.',
      interesses: ['natureza', 'canoagem', 'fotografia']
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
    },
    {
      id: '4',
      nome: 'Restaurante Sabor Mineiro',
      fotoUrl: '/assets/restaurante1.jpg',
      categoria: 'Restaurante',
      endereco: 'Rua Minas, 321',
      descricao: 'Comida mineira tradicional e buffet variado.'
    },
    {
      id: '5',
      nome: 'Churrascaria Gaúcha',
      fotoUrl: '/assets/churrascaria1.jpg',
      categoria: 'Churrascaria',
      endereco: 'Av. Pampas, 654',
      descricao: 'Carnes nobres e rodízio completo.'
    },
    {
      id: '6',
      nome: 'Padaria Pão Quente',
      fotoUrl: '/assets/padaria1.jpg',
      categoria: 'Padaria',
      endereco: 'Rua do Trigo, 77',
      descricao: 'Pães frescos e doces deliciosos.'
    },
    {
      id: '7',
      nome: 'Sorveteria Gelato',
      fotoUrl: '/assets/sorveteria1.jpg',
      categoria: 'Sorveteria',
      endereco: 'Av. do Sol, 888',
      descricao: 'Sorvetes artesanais de diversos sabores.'
    },
    {
      id: '8',
      nome: 'Hamburgueria Urban',
      fotoUrl: '/assets/hamburgueria1.jpg',
      categoria: 'Hamburgueria',
      endereco: 'Rua Burger, 101',
      descricao: 'Hambúrgueres gourmet e batatas crocantes.'
    },
    {
      id: '9',
      nome: 'Bistrô Paris',
      fotoUrl: '/assets/bistro1.jpg',
      categoria: 'Bistrô',
      endereco: 'Rua França, 202',
      descricao: 'Culinária francesa em ambiente sofisticado.'
    },
    {
      id: '10',
      nome: 'Pub Irlandês',
      fotoUrl: '/assets/pub1.jpg',
      categoria: 'Pub',
      endereco: 'Av. Irlanda, 303',
      descricao: 'Cervejas importadas e música ao vivo.'
    }
  ];
}
