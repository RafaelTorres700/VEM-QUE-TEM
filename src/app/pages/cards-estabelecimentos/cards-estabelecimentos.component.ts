// cards-usuarios.component.ts
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface para definir a estrutura de um estabelecimento
 */
export interface Establishment {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  gallery?: string[];
  rating?: number;
  neighborhood?: string;
  city?: string;
  features?: string[];
  highlightBadge?: string;
  availableReservations?: number;
  reviewsCount?: number;
  lastReview?: string;
  isLiked?: boolean;
  isFeatured?: boolean;
  isFullCapacity?: boolean;
}

/**
 * Interface para eventos emitidos pelo componente
 */
export interface CardActions {
  type: 'like' | 'know-more' | 'reserve';
  establishment: Establishment;
  data?: any;
}

/**
 * Componente de Card de Usuários/Estabelecimentos
 * Exibe informações de estabelecimentos de forma atrativa e interativa
 *
 * @example
 * <app-cards-usuarios
 *   [establishment]="myEstablishment"
 *   (cardAction)="handleCardAction($event)"
 *   [isLoading]="loading">
 * </app-cards-estabelecimentos>
 */
@Component({
  selector: 'app-cards-estabelecimentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-estabelecimentos.component.html',
  styleUrls: ['./cards-estabelecimentos.component.scss']
})
export class CardsEstabelecimentosComponent implements OnInit, OnDestroy {
  /**
   * Dados do estabelecimento a ser exibido
   */
  @Input() establishment: Establishment = {
    id: 'default',
    name: 'Estabelecimento',
    description: 'Descrição do estabelecimento',
    imageUrl: '/assets/boate3.jpg',
    gallery: ['/assets/boate2.jpg', '/assets/boate2.jpg', '/assets/boate3.jpg'],
    rating: 4.5,
    neighborhood: 'Centro',
    city: 'Rio de Janeiro',
    features: ['Música ao vivo', 'Área VIP', 'Camrotes exclusivos', 'Wi-Fi', 'Acessibilidade'],
    highlightBadge: 'Destaque',
    availableReservations: 10,
    reviewsCount: 25,
    lastReview: 'Ambiente incrível!'
  };

  /**
   * Estado de loading do componente
   */
  @Input() isLoading: boolean = false;

  /**
   * Habilita/desabilita animações
   */
  @Input() enableAnimations: boolean = true;

  /**
   * Tema do card (padrão: dark)
   */
  @Input() theme: 'dark' | 'light' = 'dark';

  /**
   * Emite eventos de ação do card
   */
  @Output() cardAction = new EventEmitter<CardActions>();

  /**
   * Emite quando o card é clicado
   */
  @Output() cardClick = new EventEmitter<Establishment>();

  /**
   * Emite quando o like é alterado
   */
  @Output() likeChanged = new EventEmitter<{ establishment: Establishment; isLiked: boolean }>();

  // Estados internos
  public isLiked: boolean = false;
  public isHovered: boolean = false;
  private animationTimeout?: number;

  // Mapeamento de ícones para características
  private readonly featureIcons: { [key: string]: string } = {
    'Música ao vivo': '🎵',
    'Área VIP': '⭐',
    'Pet Friendly': '🐕',
    'Drinks Exclusivos': '🍹',
    'Acessibilidade': '♿',
    'Wi-Fi': '📶',
    'Estacionamento': '🚗',
    'Rooftop': '🌆',
    'Karaokê': '🎤',
    'Dança': '💃',
    'Comida': '🍽️',
    'Ar Condicionado': '❄️',
    'Fumantes': '🚬',
    'Outdoor': '🌳'
  };

  constructor() {}

  ngOnInit(): void {
    this.initializeComponent();
  }

  ngOnDestroy(): void {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  }

  /**
   * Inicializa o componente com os dados do estabelecimento
   */
  private initializeComponent(): void {
    if (this.establishment) {
      this.isLiked = this.establishment.isLiked || false;
      this.validateEstablishmentData();
    }
  }

  /**
   * Valida e sanitiza os dados do estabelecimento
   */
  private validateEstablishmentData(): void {
    if (!this.establishment.id) {
      console.warn('CardsUsuariosComponent: Establishment ID is required');
      this.establishment.id = `establishment-${Date.now()}`;
    }

    if (!this.establishment.name) {
      console.warn('CardsUsuariosComponent: Establishment name is required');
      this.establishment.name = 'Estabelecimento';
    }

    // Limita a descrição a 150 caracteres
    if (this.establishment.description && this.establishment.description.length > 150) {
      this.establishment.description = this.establishment.description.substring(0, 147) + '...';
    }

    // Valida rating
    if (this.establishment.rating && (this.establishment.rating < 0 || this.establishment.rating > 5)) {
      console.warn('CardsUsuariosComponent: Rating should be between 0 and 5');
      this.establishment.rating = Math.max(0, Math.min(5, this.establishment.rating));
    }
  }

  /**
   * Alterna o estado de like do estabelecimento
   */
  public toggleLike(): void {
    if (this.isLoading) return;

    this.isLiked = !this.isLiked;
    this.establishment.isLiked = this.isLiked;

    // Emite evento de mudança de like
    this.likeChanged.emit({
      establishment: this.establishment,
      isLiked: this.isLiked
    });

    // Emite ação do card
    this.cardAction.emit({
      type: 'like',
      establishment: this.establishment,
      data: { isLiked: this.isLiked }
    });

    // Adiciona vibração no mobile (se suportado)
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  }

  /**
   * Manipula o clique em "Conhecer a casa"
   */
  public onKnowMore(): void {
    if (this.isLoading) return;

    this.cardAction.emit({
      type: 'know-more',
      establishment: this.establishment
    });
  }

  /**
   * Manipula o clique em "Reserve agora"
   */
  public onReserveNow(): void {
    if (this.isLoading) return;

    this.cardAction.emit({
      type: 'reserve',
      establishment: this.establishment
    });
  }

  /**
   * Manipula o clique no card (área geral)
   */
  public onCardClick(event: Event): void {
    // Previne propagação se clicou em botões
    const target = event.target as HTMLElement;
    if (target.closest('button')) {
      return;
    }

    this.cardClick.emit(this.establishment);
  }

  /**
   * Gera array de estrelas para exibição do rating
   */
  public getStarsArray(rating: number): number[] {
    return Array(5).fill(0).map((_, index) => index);
  }

  /**
   * Retorna o ícone correspondente à característica
   */
  public getFeatureIcon(feature: string): string {
    return this.featureIcons[feature] || '🏢';
  }

  /**
   * Retorna se o estabelecimento está lotado
   */
  public get isFullCapacity(): boolean {
    return this.establishment.availableReservations === 0;
  }

  /**
   * Retorna se o estabelecimento está em destaque
   */
  public get isFeatured(): boolean {
    return this.establishment.isFeatured || false;
  }

  /**
   * Retorna classes CSS dinâmicas para o card
   */
  public get cardClasses(): string {
    const classes = ['establishment-card'];

    if (this.isLiked) classes.push('liked');
    if (this.isLoading) classes.push('loading');
    if (this.isFeatured) classes.push('featured');
    if (this.isFullCapacity) classes.push('full-capacity');
    if (this.isHovered) classes.push('hovered');

    return classes.join(' ');
  }

  /**
   * Manipula o evento de mouse enter
   */
  public onMouseEnter(): void {
    if (this.enableAnimations) {
      this.isHovered = true;
    }
  }

  /**
   * Manipula o evento de mouse leave
   */
  public onMouseLeave(): void {
    if (this.enableAnimations) {
      this.isHovered = false;
    }
  }

  /**
   * Formata o número de avaliações
   */
  public formatReviewsCount(count: number): string {
    if (count < 1000) return count.toString();
    if (count < 1000000) return (count / 1000).toFixed(1) + 'k';
    return (count / 1000000).toFixed(1) + 'M';
  }

  /**
   * Retorna a cor do badge de disponibilidade
   */
  public getAvailabilityBadgeColor(): string {
    if (!this.establishment.availableReservations) return 'danger';
    if (this.establishment.availableReservations < 5) return 'warning';
    return 'success';
  }

  /**
   * Retorna o texto formatado da disponibilidade
   */
  public getAvailabilityText(): string {
    const available = this.establishment.availableReservations;
    if (!available || available === 0) return 'Lotado';
    if (available === 1) return '1 vaga';
    if (available < 10) return `${available} vagas`;
    return `${available}+ vagas`;
  }

  /**
   * Calcula a porcentagem de ocupação
   */
  public getOccupancyPercentage(): number {
    const total = 100; // Assumindo capacidade total de 100
    const available = this.establishment.availableReservations || 0;
    return Math.round(((total - available) / total) * 100);
  }

  /**
   * Retorna se deve mostrar o badge de disponibilidade
   */
  public shouldShowAvailabilityBadge(): boolean {
    return this.establishment.availableReservations !== undefined;
  }

  /**
   * Retorna se deve mostrar a galeria
   */
  public shouldShowGallery(): boolean {
    return !!(this.establishment.gallery && this.establishment.gallery.length > 0);
  }

  /**
   * Retorna se deve mostrar o resumo de reviews
   */
  public shouldShowReviewsSummary(): boolean {
    return !!(this.establishment.reviewsCount && this.establishment.reviewsCount > 0);
  }

  /**
   * Método para debug (desenvolvimento)
   */
  public debugInfo(): void {
    console.log('CardsUsuariosComponent Debug Info:', {
      establishment: this.establishment,
      isLiked: this.isLiked,
      isLoading: this.isLoading,
      cardClasses: this.cardClasses
    });
  }
}

// Exemplo de uso em outro componente:
/*
export class ExampleUsageComponent {
  myEstablishment: Establishment = {
    id: 'club-aurora',
    name: 'Club Aurora',
    description: 'Ambiente sofisticado, DJs renomados e drinks exclusivos.',
    imageUrl: '/assets/images/club-aurora.jpg',
    gallery: ['/assets/images/gallery1.jpg', '/assets/images/gallery2.jpg'],
    rating: 4.8,
    neighborhood: 'Ipanema',
    city: 'Rio de Janeiro',
    features: ['Música ao vivo', 'Rooftop', 'Área VIP', 'Wi-Fi', 'Acessibilidade'],
    highlightBadge: 'Destaque da Semana',
    availableReservations: 15,
    reviewsCount: 342,
    lastReview: 'Ambiente incrível, drinks excelentes!',
    isLiked: false,
    isFeatured: true
  };

  handleCardAction(action: CardActions) {
    switch (action.type) {
      case 'like':
        console.log('Estabelecimento curtido:', action.establishment.name);
        break;
      case 'know-more':
        // Navegar para página de detalhes
        break;
      case 'reserve':
        // Navegar para página de reservas
        break;
    }
  }
}
*/
