import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketioClientService {
  socket;
  constructor() {
    this.socket = io('http://localhost:3000/', { transports: ['websocket'] });
  }

  connect() {
    this.socket.emit('message');
  }
}
