import { Component } from '@angular/core';
import { StreamsAccordionDIO } from 'projects/millterial/src/public-api';
import { streamList } from '../streamList';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss'],
})
export class LandingPageComponentComponent {
  streamAccodrionDIO: StreamsAccordionDIO = streamList;
  createStream() {
    // Create a stream
    console.log('Stream created');
  }
}
