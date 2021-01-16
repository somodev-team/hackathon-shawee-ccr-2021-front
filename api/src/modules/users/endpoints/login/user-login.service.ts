import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { IUserLoginDTO } from './user-login.dto'
import { IUsersRepository } from '../../users.repository'
import {
  IJwtObject,
  JWT_SECRET,
} from '../../../../core/middlewares/authentication.middleware'

export class UserLoginService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: IUserLoginDTO): Promise<string> {
    const user = await this.usersRepository.findByUsername(data.username)
    if (!user) {
      throw Error('users.login.wrong-credentials')
    } else {
      const passwordHashMatch = await bcrypt.compare(
        data.password,
        user.password
      )
      if (!passwordHashMatch) {
        throw Error('users.login.wrong-credentials')
      }
      const jwtObject: IJwtObject = {
        user: {
          id: user.id,
          username: user.username,
          type: user.type,
        },
      }
      const token = jwt.sign(jwtObject, JWT_SECRET)
      return token
    }
  }
}
