import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnoffswitchComponent } from './onoffswitch.component';

describe('OnoffswitchComponent', () => {
  let component: OnoffswitchComponent;
  let fixture: ComponentFixture<OnoffswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnoffswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnoffswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
