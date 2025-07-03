import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-acont',
  standalone: true,                      // OBRIGATÓRIO!
  imports: [CommonModule],               // OBRIGATÓRIO!
  templateUrl: './create-acont.component.html',
  styleUrls: ['./create-acont.component.scss'] // Corrigido!
})
export class CreateAcontComponent { }
