import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AvatarsModule,
  MillterialButtonModule,
  MillterialStreamPanelModule,
} from '../../../millterial/src/public-api';
import { StreamAuditoriumComponent } from './stream-auditorium/stream-auditorium.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { AuditoriumSeatingComponent } from './stream-auditorium/auditorium-seating/auditorium-seating.component';
import { AuditoriumStageComponent } from './stream-auditorium/auditorium-stage/auditorium-stage.component';
import { AuditoriumCallerStageComponent } from './stream-auditorium/auditorium-caller-stage/auditorium-caller-stage.component';
@NgModule({
  declarations: [
    AppComponent,
    StreamAuditoriumComponent,
    LandingPageComponentComponent,
    AuditoriumSeatingComponent,
    AuditoriumStageComponent,
    AuditoriumCallerStageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AvatarsModule,
    MillterialButtonModule,
    MillterialStreamPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
