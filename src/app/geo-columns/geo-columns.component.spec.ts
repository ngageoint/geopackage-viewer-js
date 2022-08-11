import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoColumnsComponent } from './geo-columns.component';

describe('GeoColumnsComponent', () => {
  let component: GeoColumnsComponent;
  let fixture: ComponentFixture<GeoColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
