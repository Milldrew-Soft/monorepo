import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamAuditoriumComponent } from './stream-auditorium.component';

describe('StreamAuditoriumComponent', () => {
  let component: StreamAuditoriumComponent;
  let fixture: ComponentFixture<StreamAuditoriumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamAuditoriumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamAuditoriumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
