import { Request, Response } from 'express'
import createHttpError from 'http-errors'
import { UserCreateService } from './user-create.service'

export class UserCreateController {
  constructor(private userCreateService: UserCreateService) {}

  async handle(req: Request, res: Response, next: any): Promise<Response> {
    const { email, password } = req.body
    try {
      await this.userCreateService.execute({
        email,
        password,
      })
    } catch (error) {
      return next(createHttpError(400, error))
    }

    return res.status(201).send()
  }
}
