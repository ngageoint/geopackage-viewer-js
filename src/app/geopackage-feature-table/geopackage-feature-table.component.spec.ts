import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeopackageFeatureTableComponent } from './geopackage-feature-table.component';

describe('GeopackageFeatureTableComponent', () => {
  let component: GeopackageFeatureTableComponent;
  let fixture: ComponentFixture<GeopackageFeatureTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeopackageFeatureTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeopackageFeatureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
