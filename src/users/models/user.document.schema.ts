import { Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    type: String,
    isRequired: true,
  })
  nombre: string;
  @Prop({
    type: String,
    isRequired: false,
  })
  apellidoPaterno: string;
  @Prop({
    type: String,
  })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
