import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { StreamAuditoriumComponent } from './stream-auditorium/stream-auditorium.component';

const routes: Routes = [
  { path: '', component: LandingPageComponentComponent },
  { path: 'stream/:streamId', component: StreamAuditoriumComponent },
  { path: '**', component: LandingPageComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
