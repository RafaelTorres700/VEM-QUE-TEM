import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from "./pages/home/home.component";
import { LoginPageComponent } from './formularios/login-page/login-page.component';
import { FooterComponent } from "../layout/footer/footer.component";
import { CreateAcontComponent } from "./formularios/create-acont/create-acont.component";
import { CardsUsuariosComponent } from "./pages/cards-usuarios/cards-usuarios.component";
import { CardsEstabelecimentosComponent } from "./pages/cards-estabelecimentos/cards-estabelecimentos.component";
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { CriarEventosComponent } from "./formularios/criar-eventos/criar-eventos.component";
import { CreateEstabelecimentoComponent } from "./formularios/create-estabelecimento/create-estabelecimento.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    ReactiveFormsModule,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    LoginPageComponent,
    FooterComponent,
    CreateAcontComponent,
    CardsUsuariosComponent,
    CardsEstabelecimentosComponent,
    CriarEventosComponent,
    CreateEstabelecimentoComponent

],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vqtDoZero';
}
