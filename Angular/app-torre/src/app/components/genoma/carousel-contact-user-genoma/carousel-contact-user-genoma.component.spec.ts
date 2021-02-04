import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselContactUserGenomaComponent } from './carousel-contact-user-genoma.component';

describe('CarouselContactUserGenomaComponent', () => {
  let component: CarouselContactUserGenomaComponent;
  let fixture: ComponentFixture<CarouselContactUserGenomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselContactUserGenomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselContactUserGenomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
