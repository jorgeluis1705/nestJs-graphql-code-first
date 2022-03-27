import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int, { nullable: true })
  id: number;

  @Field({ nullable: true })
  nombre?: string;

  @Field({ nullable: true })
  apellidoPaterno?: string;
}
