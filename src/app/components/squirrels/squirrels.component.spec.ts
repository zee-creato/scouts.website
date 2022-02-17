import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquirrelsComponent } from './squirrels.component';

describe('SquirrelsComponent', () => {
  let component: SquirrelsComponent;
  let fixture: ComponentFixture<SquirrelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquirrelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquirrelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
