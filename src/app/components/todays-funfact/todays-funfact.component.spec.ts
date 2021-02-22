import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysFunfactComponent } from './todays-funfact.component';

describe('TodaysFunfactComponent', () => {
  let component: TodaysFunfactComponent;
  let fixture: ComponentFixture<TodaysFunfactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysFunfactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysFunfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
