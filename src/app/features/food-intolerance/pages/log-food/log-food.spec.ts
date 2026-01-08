import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFood } from './log-food';

describe('LogFood', () => {
  let component: LogFood;
  let fixture: ComponentFixture<LogFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogFood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogFood);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
