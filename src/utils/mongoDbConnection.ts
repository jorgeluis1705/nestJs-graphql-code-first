import { UserSchema } from './../users/models/user.document.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserMongo } from 'src/users/models/user.document.schema';

export const mongoDbConnection = MongooseModule.forRoot(
  'mongodb+srv://node_user:pBYi9t$bOcal2^C@cluster0.ayyll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
);
export const MongoDocuments = MongooseModule.forFeature([
  { name: UserMongo.name, schema: UserSchema }
]);
