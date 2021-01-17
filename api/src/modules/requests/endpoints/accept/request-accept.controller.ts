import { Request, Response } from 'express'
import createHttpError from 'http-errors'
import { getJWTfromRequest } from '../../../../core/utils/get-jwt-from-request'
import { RequestAcceptService } from './request-accept.service'

export class RequestAcceptController {
  constructor(private requestAcceptService: RequestAcceptService) {}

  async handle(req: Request, res: Response, next: any): Promise<Response> {
    const jwtData = getJWTfromRequest(req)
    const { requesterId } = req.body
    try {
      await this.requestAcceptService.execute({
        requestedId: jwtData.user.id,
        requesterId,
      })
    } catch (error) {
      return next(createHttpError(400, error))
    }

    return res.status(200).send()
  }
}
