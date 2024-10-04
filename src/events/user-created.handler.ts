import { IEventHandler } from '@nestjs/cqrs';
import { UserCreatedEvent } from './user-created.event';
import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  @OnEvent('user.created')
  handle(event: UserCreatedEvent) {
    // Lógica para enviar email de boas-vindas
    console.log(`Enviar email para ${event.email}`);
  }
}