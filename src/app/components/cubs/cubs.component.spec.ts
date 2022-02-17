import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubsComponent } from './cubs.component';

describe('CubsComponent', () => {
  let component: CubsComponent;
  let fixture: ComponentFixture<CubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
