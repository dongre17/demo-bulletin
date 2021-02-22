import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysSnacksComponent } from './todays-snacks.component';

describe('TodaysSnacksComponent', () => {
  let component: TodaysSnacksComponent;
  let fixture: ComponentFixture<TodaysSnacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysSnacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysSnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
