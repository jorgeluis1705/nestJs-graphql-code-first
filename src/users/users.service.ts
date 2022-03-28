import { UserDocument, UserMongo } from './models/user.document.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserMongo.name) private userModel: Model<UserDocument>,
  ) {}

  findAll(): Observable<UserMongo[]> {
    return new Observable((obs) => {
      this.userModel
        .find()
        .exec()
        .then((e) => {
          obs.next(e);
        })
        .catch((error) => obs.error(error))
        .finally(() => obs.complete());
    });
  }

  async create(createCatDto: UserDocument): Promise<any> {
    const createdCat = new this.userModel(createCatDto);
    console.log(createdCat.save());
    return {
      id: 'aaa',
      nombre: 'bbbb',
      apellidoPaterno: 'real',
      email: 'XD',
    };
  }
  async getOneUser(id: string): Promise<any> {
    return this.userModel
      .findById(id)
      .exec()
      .then((res) => res)
      .catch((err) => err);
  }
}
