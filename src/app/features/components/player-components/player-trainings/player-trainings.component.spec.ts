import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTrainingsComponent } from './player-trainings.component';

describe('PlayerTrainingsComponent', () => {
  let component: PlayerTrainingsComponent;
  let fixture: ComponentFixture<PlayerTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTrainingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
