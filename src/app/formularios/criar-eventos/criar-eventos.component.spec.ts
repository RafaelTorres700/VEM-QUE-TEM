import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEventosComponent } from './criar-eventos.component';

describe('CriarEventosComponent', () => {
  let component: CriarEventosComponent;
  let fixture: ComponentFixture<CriarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarEventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
