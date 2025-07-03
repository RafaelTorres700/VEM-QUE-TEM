import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-usuarios',
  standalone: true,                  // ATENÇÃO: Adicione isto!
  imports: [CommonModule],           // E isto!
  templateUrl: './cards-usuarios.component.html',
  styleUrls: ['./cards-usuarios.component.scss']
})
export class CardsUsuariosComponent { }
