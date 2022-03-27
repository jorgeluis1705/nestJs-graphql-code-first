import { UsersResolver } from './users.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [UsersResolver],
})
export class UsersModule {}
