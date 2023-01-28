import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignalingChannelGateway } from './signaling-channel/signaling-channel.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SignalingChannelGateway],
})
export class AppModule {}
