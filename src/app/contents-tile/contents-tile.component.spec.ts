import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsTileComponent } from './contents-tile.component';

describe('ContentsTileComponent', () => {
  let component: ContentsTileComponent;
  let fixture: ComponentFixture<ContentsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
