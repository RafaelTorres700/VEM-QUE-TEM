import { Routes } from '@angular/router';
import { CardsEstabelecimentosComponent } from './pages/cards-estabelecimentos/cards-estabelecimentos.component';
import { CardsUsuariosComponent } from './pages/cards-usuarios/cards-usuarios.component';
import { CreateAcontComponent } from './formularios/create-acont/create-acont.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { LoginPageComponent } from './formularios/login-page/login-page.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { CriarEventosComponent } from './formularios/criar-eventos/criar-eventos.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },


    {
        path: "loginpage",
        component: LoginPageComponent
    },

    {
        path: "cardsestabelecimentos",
        component: CardsEstabelecimentosComponent
    },
    {
        path: "cardsusuarios",
        component: CardsUsuariosComponent
    },
    {
        path: "criarconta",
        component: CreateAcontComponent
    },
    {
        path: "footer",
        component: FooterComponent
    },

    {
        path: "header",
        component: HeaderComponent
    },
    {
        path: "sidebar",
        component: SidebarComponent
    },


    {
        path: "criar-evento",
        component: CriarEventosComponent
    }

];
