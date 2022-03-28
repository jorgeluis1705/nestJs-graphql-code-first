import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';

@Resolver((of) => User)
export class UsersResolver {
  @Query((returns) => [User], { nullable: 'itemsAndList' })
  getAll(): any {
    return [];
  }
}
