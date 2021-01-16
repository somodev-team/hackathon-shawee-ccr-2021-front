import { database } from '../../../../datasources/knex';
import { UsersRepository } from '../../users.repository';
import { UserLoginService } from '../login/user-login.service';
import { UserCreateController } from './user-create.controller';
import { UserCreateService } from './user-create.service';

const usersRepository = new UsersRepository(database);

const userCreate = new UserCreateService(usersRepository);
const userLogin = new UserLoginService(usersRepository);
const userCreateController = new UserCreateController(userCreate, userLogin);

export { userCreateController };
