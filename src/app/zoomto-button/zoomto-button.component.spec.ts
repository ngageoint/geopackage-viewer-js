import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomtoButtonComponent } from './zoomto-button.component';

describe('ZoomtoButtonComponent', () => {
  let component: ZoomtoButtonComponent;
  let fixture: ComponentFixture<ZoomtoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomtoButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomtoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
