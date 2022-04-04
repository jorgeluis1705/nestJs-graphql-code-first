import { Field, Int, ObjectType, ID } from '@nestjs/graphql';

@ObjectType({ description: 'UserType' })
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
