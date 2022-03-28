import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ID } from 'type-graphql';

@ObjectType()
export class User {
  @Field((type) => ID, { nullable: false })
  _id: string;

  @Field((type) => String, { nullable: true })
  nombre: string;

  @Field((type) => String, { nullable: true })
  apellidoPaterno?: string;

  @Field((type) => String, { nullable: true })
  email?: string;
}
