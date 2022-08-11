import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomtoTileComponent } from './zoomto-tile.component';

describe('ZoomtoTileComponent', () => {
  let component: ZoomtoTileComponent;
  let fixture: ComponentFixture<ZoomtoTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomtoTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomtoTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
