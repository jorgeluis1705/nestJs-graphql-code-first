import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { graphqlModuleConfiguration } from './utils/model-grahql';
import { mongoDbConnection } from './utils/mongoDbConnection';
import { UsersModule } from './users/users.module';

@Module({
  imports: [graphqlModuleConfiguration, mongoDbConnection, UsersModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
