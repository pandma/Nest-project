import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  showUsers() {
    return this.userService.getUsers();
  }
  @Post()
  newUser(@Body() user) {
    return this.userService.addUsers(user);
  }
}
