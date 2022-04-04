import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { UserInput } from './dto/user.input';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User as UserGraphql } from './models/user.model';
import { User as UserMongo } from './models/user.document.schema';
@Resolver((of) => UserGraphql)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Query((returns) => [UserGraphql], { nullable: 'itemsAndList' })
  getAll(): Observable<UserMongo[]> {
    return new Observable((obs) => {
      this.usersService.findAll().subscribe({
        next: (resp) => obs.next(resp),
        error: (err) => obs.error(err),
        complete: () => obs.complete(),
      });
    });
  }
  @Mutation((returns) => UserGraphql)
  async createItem(@Args('input') input: UserInput): Promise<UserMongo> {
    return await this.usersService.create(input);
  }
  @Query((returns) => UserGraphql)
  getOne(
    @Args({ name: 'userID', type: () => String }) userID: string,
  ): Observable<UserMongo> {
    return new Observable((obs) => {
      this.usersService.getOneUser(userID).subscribe({
        next: (resp) => obs.next(resp),
        error: (err) => obs.error(err),
        complete: () => obs.complete(),
      });
    });
  }

  @Mutation((type) => String)
  delteUser(
    @Args({ name: 'userID', type: () => String }) id: string,
  ): Observable<string> {
    return new Observable<string>((obs) => {
      this.usersService.delteUserService(id).subscribe({
        next: (resp) => obs.next(resp),
        error: (err) => obs.error(err),
        complete: () => obs.complete(),
      });
    });
  }
}
