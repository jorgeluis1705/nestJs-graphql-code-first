import { Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
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

export const UserSchema = SchemaFactory.createForClass(User);
