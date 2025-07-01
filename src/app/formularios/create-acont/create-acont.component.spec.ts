import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcontComponent } from './create-acont.component';

describe('CreateAcontComponent', () => {
  let component: CreateAcontComponent;
  let fixture: ComponentFixture<CreateAcontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAcontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
