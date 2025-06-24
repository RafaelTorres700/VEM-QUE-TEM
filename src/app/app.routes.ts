import { Routes } from '@angular/router';
import { CardsEstabelecimentosComponent } from './pages/cards-estabelecimentos/cards-estabelecimentos.component';
import { CardsUsuariosComponent } from './pages/cards-usuarios/cards-usuarios.component';
import { CreateAcontComponent } from './pages/create-acont/create-acont.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { NgbdCarouselBasic } from './pages/carousel-basic/carousel-basic.component';

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
      path: "carousel",
      component: NgbdCarouselBasic
    }
];
