import { Module } from '@nestjs/common';
import { UserCreatedHandler } from './user-created.handler';

@Module({
  providers: [UserCreatedHandler],
})
export class EventsModule { }
