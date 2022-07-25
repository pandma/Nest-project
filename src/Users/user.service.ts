import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/models/user.entity';
import { userInterface } from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userData: Repository<User>,
  ) {}

  getUsers() {
    console.log('user', this.userData);
    return this.userData.find();
  }
  addUsers(user: userInterface) {
    try {
      this.userData.save(user);
      return { message: 'user ceated sussesfully' };
    } catch (error) {
      console.error(error);
    }
  }
}
