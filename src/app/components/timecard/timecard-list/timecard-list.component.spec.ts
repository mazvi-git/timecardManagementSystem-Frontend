import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardListComponent } from './timecard-list.component';

describe('TimecardListComponent', () => {
  let component: TimecardListComponent;
  let fixture: ComponentFixture<TimecardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimecardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
