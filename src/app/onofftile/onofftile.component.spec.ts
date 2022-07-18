import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnofftileComponent } from './onofftile.component';

describe('OnofftileComponent', () => {
  let component: OnofftileComponent;
  let fixture: ComponentFixture<OnofftileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnofftileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnofftileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
