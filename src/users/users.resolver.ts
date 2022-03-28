import { UsersService } from './users.service';
import { User } from './models/user.model';
import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Observable } from 'rxjs';
import { UserMongo } from './models/user.document.schema';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {
    console.log('XDDDD');
  }

  @Query((returns) => User, { nullable: true })
  async getUser(@Args('id', { type: () => String }) id: string) {
    const user = await this.userService.getOneUser(id);
    return user;
  }
  @Query((returns) => [User], { nullable: 'itemsAndList' })
  getAll(): Observable<UserMongo[]> {
    return new Observable<UserMongo[]>((obs) => {
      this.userService.findAll().subscribe({
        next: (e) => obs.next(e),
        error: (err) => obs.next(err),
        complete: () => obs.complete(),
      });
    });
  }
}
