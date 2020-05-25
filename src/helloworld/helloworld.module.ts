import { Module } from '@nestjs/common';
import { HelloworldController } from './helloworld.controller';

@Module({
  controllers: [HelloworldController]
})
export class HelloworldModule {}
