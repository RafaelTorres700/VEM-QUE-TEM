import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-estabelecimento',
  standalone: true,                         // Adicione!
  imports: [CommonModule, ReactiveFormsModule], // Adicione!
  templateUrl: './create-estabelecimento.component.html',
  styleUrls: ['./create-estabelecimento.component.scss']
})
export class CreateEstabelecimentoComponent {
  formEstabelecimento: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formEstabelecimento = this.fb.group({
      nome_estabelecimento: ['', Validators.required],
      cnpj: ['', Validators.required],
      endereco: ['', Validators.required],
      complemento: [''],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      nome_responsavel: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      foto1: [null],
      foto2: [null],
      foto3: [null],
      foto4: [null],
      foto5: [null],
    });
  }

  onSubmitEstabelecimento() {
    if (this.formEstabelecimento.valid) {
      // Aqui você pode enviar os dados para a API/backend
      console.log('Formulário enviado:', this.formEstabelecimento.value);
    } else {
      // Exibir feedback de validação, se quiser
      this.formEstabelecimento.markAllAsTouched();
    }
  }

  onFileChange(event: any) {
    const files: FileList = event.target.files;
    // Permitir até 5 arquivos
    for (let i = 0; i < Math.min(files.length, 5); i++) {
      this.formEstabelecimento.patchValue({ [`foto${i + 1}`]: files[i] });
    }
    // Se quiser preview, manipule aqui também
  }
}
