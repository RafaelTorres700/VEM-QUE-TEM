import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, Validator, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-acont',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-acont.component.html',
  styleUrls: ['./create-acont.component.scss']
})
export class CreateAcontComponent {

  cadastroUsuario: any;

  constructor (private formBuilder: FormBuilder){

    this.cadastroUsuario = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
        email: ['', [Validators.required]],
        date: ['', [Validators.required]],
        estado: ['', [Validators.required]],
        senha: ['', [Validators.required]],
        termos: [true, [Validators.required]]
      });
  }

  enviar(){

     console.log(this.cadastroUsuario.value);
     
  }
}
