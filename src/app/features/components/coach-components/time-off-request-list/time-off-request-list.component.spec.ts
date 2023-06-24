import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOffRequestListComponent } from './time-off-request-list.component';

describe('TimeOffRequestListComponent', () => {
  let component: TimeOffRequestListComponent;
  let fixture: ComponentFixture<TimeOffRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeOffRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeOffRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
