import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstabelecimentoComponent } from './create-estabelecimento.component';

describe('CreateEstabelecimentoComponent', () => {
  let component: CreateEstabelecimentoComponent;
  let fixture: ComponentFixture<CreateEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEstabelecimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
