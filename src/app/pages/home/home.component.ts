import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,                     // OBRIGATÓRIO!
  imports: [CommonModule],              // OBRIGATÓRIO!
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  // CORRETO!
})
export class HomeComponent { }
