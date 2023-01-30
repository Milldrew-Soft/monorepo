import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriumStageComponent } from './auditorium-stage.component';

describe('AuditoriumStageComponent', () => {
  let component: AuditoriumStageComponent;
  let fixture: ComponentFixture<AuditoriumStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriumStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriumStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
