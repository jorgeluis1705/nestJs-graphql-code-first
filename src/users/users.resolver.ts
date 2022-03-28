import { UsersService } from './users.service';
import { UserInput } from './dto/user.input';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User as UserGraphql } from './models/user.model';
import { User } from './models/user.document.schema';
@Resolver((of) => UserGraphql)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Query((returns) => [UserGraphql], { nullable: 'itemsAndList' })
  getAll(): any {
    return [];
  }
  @Mutation((returns) => UserGraphql)
  async createItem(@Args('input') input: UserInput): Promise<User> {
    return await this.usersService.create(input);
  }
}
