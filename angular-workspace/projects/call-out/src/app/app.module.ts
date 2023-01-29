import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MillterialButtonModule,
  MillterialStreamPanelModule,
} from '../../../millterial/src/public-api';
import { StreamAuditoriumComponent } from './stream-auditorium/stream-auditorium.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
@NgModule({
  declarations: [AppComponent, StreamAuditoriumComponent, LandingPageComponentComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MillterialButtonModule,
    MillterialStreamPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
