import { DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

export const mongoDbConnection: DynamicModule = MongooseModule.forRoot(
  'mongodb+srv://node_user:pBYi9t$bOcal2^C@cluster0.ayyll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
);
