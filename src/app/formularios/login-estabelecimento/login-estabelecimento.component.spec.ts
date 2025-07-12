import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEstabelecimentoComponent } from './login-estabelecimento.component';

describe('LoginEstabelecimentoComponent', () => {
  let component: LoginEstabelecimentoComponent;
  let fixture: ComponentFixture<LoginEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginEstabelecimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
