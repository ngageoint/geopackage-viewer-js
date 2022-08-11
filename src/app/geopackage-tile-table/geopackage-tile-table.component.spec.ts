import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeopackageTileTableComponent } from './geopackage-tile-table.component';

describe('GeopackageTileTableComponent', () => {
  let component: GeopackageTileTableComponent;
  let fixture: ComponentFixture<GeopackageTileTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeopackageTileTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeopackageTileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
