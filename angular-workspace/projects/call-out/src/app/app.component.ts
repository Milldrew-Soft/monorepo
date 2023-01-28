import { Component } from '@angular/core';
import { StreamsAccordionDIO } from 'projects/millterial/src/public-api';
import { streamList } from './streamList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  streamAccodrionDIO: StreamsAccordionDIO = streamList;
  createStream() {
    // Create a stream
    console.log('Stream created');
  }
}
