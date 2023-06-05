import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachTimeOffRequestsComponent } from './coach-time-off-requests.component';

describe('CoachTimeOffRequestsComponent', () => {
  let component: CoachTimeOffRequestsComponent;
  let fixture: ComponentFixture<CoachTimeOffRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachTimeOffRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachTimeOffRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
