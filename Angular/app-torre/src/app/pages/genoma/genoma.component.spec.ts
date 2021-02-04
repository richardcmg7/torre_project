import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenomaComponent } from './genoma.component';

describe('GenomaComponent', () => {
  let component: GenomaComponent;
  let fixture: ComponentFixture<GenomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
