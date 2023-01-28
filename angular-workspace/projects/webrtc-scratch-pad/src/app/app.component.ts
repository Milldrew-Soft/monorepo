import { Component } from '@angular/core';
import { SocketioClientService } from './services/socketio-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private socketIOClient: SocketioClientService) {}
  isConnected = false;
  callButtonInnerHtml: 'Join Call' | 'Leave Call' = 'Join Call';
  callButtonClasses = this.createCallButtonClasses();
  handleCallButton(event: MouseEvent) {
    this.isConnected = !this.isConnected;
    console.log(this.isConnected);
    if (this.isConnected) {
      this.callButtonInnerHtml = 'Leave Call';
    } else {
      this.callButtonInnerHtml = 'Join Call';
    }
    this.callButtonClasses = this.createCallButtonClasses();
  }
  createCallButtonClasses() {
    return {
      connected: !!this.isConnected,
      disconnected: !this.isConnected,
    };
  }
}
