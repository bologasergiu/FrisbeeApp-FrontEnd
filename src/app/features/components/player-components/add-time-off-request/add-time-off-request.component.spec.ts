import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimeOffRequestComponent } from './add-time-off-request.component';

describe('AddTimeOffRequestComponent', () => {
  let component: AddTimeOffRequestComponent;
  let fixture: ComponentFixture<AddTimeOffRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimeOffRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTimeOffRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
