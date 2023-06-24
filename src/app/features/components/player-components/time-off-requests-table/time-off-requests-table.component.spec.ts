import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOffRequestsTableComponent } from './time-off-requests-table.component';

describe('TimeOffRequestsTableComponent', () => {
  let component: TimeOffRequestsTableComponent;
  let fixture: ComponentFixture<TimeOffRequestsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeOffRequestsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeOffRequestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
