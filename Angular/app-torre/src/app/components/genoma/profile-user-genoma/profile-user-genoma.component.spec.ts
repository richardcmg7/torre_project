import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserGenomaComponent } from './profile-user-genoma.component';

describe('ProfileUserGenomaComponent', () => {
  let component: ProfileUserGenomaComponent;
  let fixture: ComponentFixture<ProfileUserGenomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUserGenomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserGenomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
