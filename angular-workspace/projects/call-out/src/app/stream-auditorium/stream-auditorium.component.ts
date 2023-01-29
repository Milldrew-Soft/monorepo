import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stream-auditorium',
  templateUrl: './stream-auditorium.component.html',
  styleUrls: ['./stream-auditorium.component.scss'],
})
export class StreamAuditoriumComponent {
  avatarUrl =
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg';
  streamId: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.streamId = params['streamId'];
    });
  }
}
