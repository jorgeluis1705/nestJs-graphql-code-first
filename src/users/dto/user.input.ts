import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly nombre: string;
  @Field()
  readonly apellidoPaterno: string;
  @Field()
  readonly email: string;
}
