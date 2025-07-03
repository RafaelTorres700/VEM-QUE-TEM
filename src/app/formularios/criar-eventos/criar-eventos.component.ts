import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criar-eventos',
  standalone: true,                             // Obrigatório
  imports: [CommonModule],                      // Obrigatório
  templateUrl: './criar-eventos.component.html',
  styleUrls: ['./criar-eventos.component.scss'] // Corrigido!
})
export class CriarEventosComponent { }
