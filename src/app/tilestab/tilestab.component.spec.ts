import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilestabComponent } from './tilestab.component';

describe('TilestabComponent', () => {
  let component: TilestabComponent;
  let fixture: ComponentFixture<TilestabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilestabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TilestabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
