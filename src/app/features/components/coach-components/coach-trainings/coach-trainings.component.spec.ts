import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachTrainingsComponent } from './coach-trainings.component';

describe('CoachTrainingsComponent', () => {
  let component: CoachTrainingsComponent;
  let fixture: ComponentFixture<CoachTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachTrainingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
