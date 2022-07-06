import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrsComponent } from './srs.component';

describe('SrsComponent', () => {
  let component: SrsComponent;
  let fixture: ComponentFixture<SrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
