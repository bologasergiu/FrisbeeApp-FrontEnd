import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTimeOffRequestsComponent } from './time-off-requests.component';

describe('TimeOffRequestsComponent', () => {
  let component: PlayerTimeOffRequestsComponent;
  let fixture: ComponentFixture<PlayerTimeOffRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTimeOffRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerTimeOffRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
