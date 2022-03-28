import { Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserMongo & Document;

@Schema()
export class UserMongo {
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  id: string;
  @Prop({
    type: String,
  })
  nombre: String;
  @Prop({
    type: String,
  })
  apellidoPaterno: String;
  @Prop({
    type: String,
  })
  email: String;
}

export const UserSchema = SchemaFactory.createForClass(UserMongo);
