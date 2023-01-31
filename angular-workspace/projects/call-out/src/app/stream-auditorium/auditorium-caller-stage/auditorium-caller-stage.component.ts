import { Component } from '@angular/core';

@Component({
  selector: 'auditorium-caller-stage',
  templateUrl: './auditorium-caller-stage.component.html',
  styleUrls: ['./auditorium-caller-stage.component.scss'],
})
export class AuditoriumCallerStageComponent {
  constructor() {}
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
}
