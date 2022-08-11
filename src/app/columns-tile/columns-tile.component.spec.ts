import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsTileComponent } from './columns-tile.component';

describe('ColumnsTileComponent', () => {
  let component: ColumnsTileComponent;
  let fixture: ComponentFixture<ColumnsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnsTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
