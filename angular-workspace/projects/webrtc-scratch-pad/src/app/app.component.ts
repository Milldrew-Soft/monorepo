import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  isConnected = false;
  callButtonInnerHtml: 'Join Call' | 'Leave Call' = 'Join Call';
  callButtonClasses = {
    connected: !!this.isConnected,
    disconnected: !this.isConnected,
  };
  handleCallButton(event: MouseEvent) {
    this.isConnected = !this.isConnected;
    console.log(this.isConnected);
    if (this.isConnected) {
      this.callButtonInnerHtml = 'Leave Call';
    } else {
      this.callButtonInnerHtml = 'Join Call';
    }
  }
}