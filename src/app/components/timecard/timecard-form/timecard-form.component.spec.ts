import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardFormComponent } from './timecard-form.component';

describe('TimecardFormComponent', () => {
  let component: TimecardFormComponent;
  let fixture: ComponentFixture<TimecardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimecardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
