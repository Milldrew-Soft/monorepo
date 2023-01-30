import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriumCallerStageComponent } from './auditorium-caller-stage.component';

describe('AuditoriumCallerStageComponent', () => {
  let component: AuditoriumCallerStageComponent;
  let fixture: ComponentFixture<AuditoriumCallerStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriumCallerStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriumCallerStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
