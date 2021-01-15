import { Request, Response } from 'express'
import createHttpError from 'http-errors'
import { UserLoginService } from './user-login.service'

export class UserLoginController {
  constructor(private userLoginService: UserLoginService) {}

  async handle(req: Request, res: Response, next: any): Promise<Response> {
    const { email, password } = req.body
    try {
      const token = await this.userLoginService.execute({
        email,
        password,
      })
      return res.json({ token })
    } catch (error) {
      return next(createHttpError(400, error))
    }
  }
}
