import { UsersResolver } from './users.resolver';
import { Module } from '@nestjs/common';
import { MongoDocuments } from 'src/utils/mongoDbConnection';
import { UsersService } from './users.service';

@Module({
  imports: [MongoDocuments],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
