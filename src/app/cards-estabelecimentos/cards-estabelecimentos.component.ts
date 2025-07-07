export class CardsEstabelecimentosComponent {
  // ...existing code...

  mathFloor(value: number): number {
    return Math.floor(value);
  }

  mathMod(value: number, mod: number): number {
    return value % mod;
  }
  // ...existing code...
}

<!-- ...existing code... -->
<span
  class="star"
  *ngFor="let star of getStarsArray(establishment.rating); let i = index"
  [class.filled]="i < mathFloor(establishment.rating)"
  [class.half]="i === mathFloor(establishment.rating) && mathMod(establishment.rating, 1) !== 0"
>
<!-- ...existing code... -->