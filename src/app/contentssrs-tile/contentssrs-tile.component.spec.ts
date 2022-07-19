import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentssrsTileComponent } from './contentssrs-tile.component';

describe('ContentssrsTileComponent', () => {
  let component: ContentssrsTileComponent;
  let fixture: ComponentFixture<ContentssrsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentssrsTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentssrsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
