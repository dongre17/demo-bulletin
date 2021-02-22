import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysExcersiseComponent } from './todays-excersise.component';

describe('TodaysExcersiseComponent', () => {
  let component: TodaysExcersiseComponent;
  let fixture: ComponentFixture<TodaysExcersiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysExcersiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysExcersiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
