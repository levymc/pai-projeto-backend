import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { loginData } from 'src/protocols/types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async signIn(@Body() loginData: loginData) {
    console.log(loginData);
    return await this.usersService.handleSignIn(loginData);
  }
}
