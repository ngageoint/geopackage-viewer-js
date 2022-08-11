import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileinfoComponent } from './tileinfo.component';

describe('TileinfoComponent', () => {
  let component: TileinfoComponent;
  let fixture: ComponentFixture<TileinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
