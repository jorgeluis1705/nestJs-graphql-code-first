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

@Resolver((of) => User)
export class UsersResolver {
  constructor() {}

  @Query((returns) => User)
  async getUser(@Args('id', { type: () => Int }) id: number) {
    return {
      id,
      nombre: 'Jose',
      apellidoPaterno: 'Peña',
    };
  }
}
