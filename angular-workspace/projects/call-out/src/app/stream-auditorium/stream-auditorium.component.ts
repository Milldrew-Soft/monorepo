import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stream-auditorium',
  templateUrl: './stream-auditorium.component.html',
  styleUrls: ['./stream-auditorium.component.scss'],
})
export class StreamAuditoriumComponent {
  streamId: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.streamId = params['streamId'];
    });
  }
}
