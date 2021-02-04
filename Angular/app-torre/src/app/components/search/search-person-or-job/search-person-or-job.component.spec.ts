import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPersonOrJobComponent } from './search-person-or-job.component';

describe('SearchPersonOrJobComponent', () => {
  let component: SearchPersonOrJobComponent;
  let fixture: ComponentFixture<SearchPersonOrJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPersonOrJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPersonOrJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
