import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCardGenomaComponent } from './carousel-card-genoma.component';

describe('CarouselCardGenomaComponent', () => {
  let component: CarouselCardGenomaComponent;
  let fixture: ComponentFixture<CarouselCardGenomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCardGenomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCardGenomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
