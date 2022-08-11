import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearallbuttonComponent } from './clearallbutton.component';

describe('ClearallbuttonComponent', () => {
  let component: ClearallbuttonComponent;
  let fixture: ComponentFixture<ClearallbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearallbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearallbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
