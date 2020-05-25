import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelloworldModule } from '../helloworld/helloworld.module';
import { AuthModule } from '../auth/auth.module';
import { AppController } from './app.controller';



@Module({
  imports: [
      ConfigModule.forRoot(),
      HelloworldModule,
      AuthModule
  ],
  controllers: [AppController]
})
export class AppModule {}
