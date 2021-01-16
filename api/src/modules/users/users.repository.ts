import { IUser, User } from './user.model';
import Knex from 'knex';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  create(user: IUser): Promise<User>;
}

export class UsersRepository implements IUsersRepository {
  constructor(private database: Knex) {}

  async findByEmail(email: string): Promise<User | undefined> {
    const result = await this.database
      .select('*')
      .from<User>('users')
      .where('email', email)
      .first();
    return result;
  }

  async create(userData: IUser): Promise<User> {
    const user = new User(userData);
    await this.database
      .insert({
        id: user.id,
        type: user.type,
        email: user.email,
        password: user.password,
      })
      .into('users');
    return user;
  }
}
