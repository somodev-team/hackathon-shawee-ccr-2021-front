import { database } from '../../../../datasources/knex'
import { UsersRepository } from '../../users.repository'
import { UserLoginController } from './user-login.controller'
import { UserLoginService } from './user-login.service'

const usersRepository = new UsersRepository(database)

const userLogin = new UserLoginService(usersRepository)
const userLoginController = new UserLoginController(userLogin)

export { userLoginController }
