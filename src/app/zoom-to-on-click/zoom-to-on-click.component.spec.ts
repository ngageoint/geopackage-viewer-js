import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomToOnClickComponent } from './zoom-to-on-click.component';

describe('ZoomToOnClickComponent', () => {
  let component: ZoomToOnClickComponent;
  let fixture: ComponentFixture<ZoomToOnClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomToOnClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomToOnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
