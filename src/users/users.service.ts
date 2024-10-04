import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateUserDto } from './dto/create-user.dto';
import { UserCreatedEvent } from '../events/user-created.event';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private users = [];

  constructor(private eventEmitter: EventEmitter2) { }

  create(createUserDto: CreateUserDto) {
    const user = {
      id: uuidv4(),
      ...createUserDto,
    };
    this.users.push(user);
    this.eventEmitter.emit('user.created', new UserCreatedEvent(user.id, user.name, user.email));
    return user;
  }

  findAll() {
    return this.users;
  }
}