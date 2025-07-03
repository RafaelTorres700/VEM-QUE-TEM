import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-estabelecimentos',
  standalone: true,                           // ATIVAR STANDALONE!
  imports: [CommonModule],                    // OBRIGATÓRIO!
  templateUrl: './cards-estabelecimentos.component.html',
  styleUrls: ['./cards-estabelecimentos.component.scss'] // CORRETO!
})
export class CardsEstabelecimentosComponent { }
