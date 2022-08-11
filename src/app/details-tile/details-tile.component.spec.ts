import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTileComponent } from './details-tile.component';

describe('DetailsTileComponent', () => {
  let component: DetailsTileComponent;
  let fixture: ComponentFixture<DetailsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
