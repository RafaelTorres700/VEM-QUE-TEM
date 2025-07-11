import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-usuarios.component.html',
  styleUrls: ['./cards-usuarios.component.scss']
})
export class CardsUsuariosComponent {
  @Input() user: any;
  @Output() curtir = new EventEmitter<string>();
  @Output() convidar = new EventEmitter<string>();

  contador = 0;

  calcularIdade(): number | null {
    if (!this.user?.dataNascimento) return null;

    const hoje = new Date();
    const nascimento = new Date(this.user.dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimento.getMonth();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  }

  contador2 = 0
  incrementar() {
    this.contador2++;
   

  }

}
