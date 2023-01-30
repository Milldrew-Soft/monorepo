import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriumSeatingComponent } from './auditorium-seating.component';

describe('AuditoriumSeatingComponent', () => {
  let component: AuditoriumSeatingComponent;
  let fixture: ComponentFixture<AuditoriumSeatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriumSeatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriumSeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
