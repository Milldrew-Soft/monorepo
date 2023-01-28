import { Test, TestingModule } from '@nestjs/testing';
import { SignalingChannelGateway } from './signaling-channel.gateway';

describe('SignalingChannelGateway', () => {
  let gateway: SignalingChannelGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignalingChannelGateway],
    }).compile();

    gateway = module.get<SignalingChannelGateway>(SignalingChannelGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
