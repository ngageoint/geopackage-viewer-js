import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentssrsComponent } from './contentssrs.component';

describe('ContentssrsComponent', () => {
  let component: ContentssrsComponent;
  let fixture: ComponentFixture<ContentssrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentssrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentssrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
