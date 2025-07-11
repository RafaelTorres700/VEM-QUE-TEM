import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Garantir que o menu comece fechado
    this.isMenuOpen = false;

    // Só executar código do DOM se estivermos no browser
    if (this.isBrowser) {
      document.body.classList.remove('menu-open');
    }
  }

  ngOnDestroy() {
    // Limpar classe do body ao destruir componente - só no browser
    if (this.isBrowser) {
      document.body.classList.remove('menu-open');
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Só aplicar classes no body se estivermos no browser e em mobile
    if (this.isBrowser && this.isMobile()) {
      if (this.isMenuOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    }
  }

  closeMenu() {
    this.isMenuOpen = false;

    // Só remover classe do body se estivermos no browser
    if (this.isBrowser) {
      document.body.classList.remove('menu-open');
    }
  }

  private isMobile(): boolean {
    // Verificar se estamos no browser antes de acessar window
    if (!this.isBrowser) {
      return false;
    }
    return window.innerWidth <= 768;
  }

  // Fechar menu ao redimensionar para desktop
  onResize() {
    if (this.isBrowser && !this.isMobile() && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
