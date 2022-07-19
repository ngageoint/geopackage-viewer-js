import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesrsComponent } from './tilesrs.component';

describe('TilesrsComponent', () => {
  let component: TilesrsComponent;
  let fixture: ComponentFixture<TilesrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilesrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
