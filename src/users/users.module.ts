import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/configs/prismaConfig/prisma.module';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  imports: [PrismaModule],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
