import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeopackageGeneralInformationComponent } from './geopackage-general-information.component';

describe('GeopackageGeneralInformationComponent', () => {
  let component: GeopackageGeneralInformationComponent;
  let fixture: ComponentFixture<GeopackageGeneralInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeopackageGeneralInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeopackageGeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
