import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { FooterComponent } from "../layout/footer/footer.component";
import { CreateAcontComponent } from "./pages/create-acont/create-acont.component";
import { CardsUsuariosComponent } from "./pages/cards-usuarios/cards-usuarios.component";
import { CardsEstabelecimentosComponent } from "./pages/cards-estabelecimentos/cards-estabelecimentos.component";
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, HomeComponent, LoginPageComponent, FooterComponent, CreateAcontComponent, CardsUsuariosComponent, CardsEstabelecimentosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vqtDoZero';
}
