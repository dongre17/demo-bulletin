import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysHealthTipsComponent } from './todays-health-tips.component';

describe('TodaysHealthTipsComponent', () => {
  let component: TodaysHealthTipsComponent;
  let fixture: ComponentFixture<TodaysHealthTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysHealthTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysHealthTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
