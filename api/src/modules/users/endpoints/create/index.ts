import { database } from '../../../../datasources/knex'
import { UsersRepository } from '../../users.repository'
import { UserCreateController } from './user-create.controller'
import { UserCreateService } from './user-create.service'

const usersRepository = new UsersRepository(database)

const userCreate = new UserCreateService(usersRepository)
const userCreateController = new UserCreateController(userCreate)

export { userCreateController }
