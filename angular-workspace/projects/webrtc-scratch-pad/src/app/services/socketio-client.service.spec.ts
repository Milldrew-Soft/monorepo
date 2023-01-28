import { TestBed } from '@angular/core/testing';

import { SocketioClientService } from './socketio-client.service';

describe('SocketioClientService', () => {
  let service: SocketioClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketioClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
