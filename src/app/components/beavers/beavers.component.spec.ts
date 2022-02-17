import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaversComponent } from './beavers.component';

describe('BeaversComponent', () => {
  let component: BeaversComponent;
  let fixture: ComponentFixture<BeaversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeaversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
