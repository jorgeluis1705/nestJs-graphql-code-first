import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { User as UserMongo } from './models/user.document.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  getAll(): Observable<UserMongo[]> {
    return new Observable((obs) => {
      this.usersService.findAll().subscribe({
        next: (resp) => obs.next(resp),
        error: (err) => obs.error(err),
        complete: () => obs.complete(),
      });
    });
  }
}
