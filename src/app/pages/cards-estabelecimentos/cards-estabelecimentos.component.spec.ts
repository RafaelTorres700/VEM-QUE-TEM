import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsEstabelecimentosComponent } from './cards-estabelecimentos.component';

describe('CardsEstabelecimentosComponent', () => {
  let component: CardsEstabelecimentosComponent;
  let fixture: ComponentFixture<CardsEstabelecimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsEstabelecimentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsEstabelecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
