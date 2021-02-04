import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFooterFilterComponent } from './search-footer-filter.component';

describe('SearchFooterFilterComponent', () => {
  let component: SearchFooterFilterComponent;
  let fixture: ComponentFixture<SearchFooterFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFooterFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFooterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
