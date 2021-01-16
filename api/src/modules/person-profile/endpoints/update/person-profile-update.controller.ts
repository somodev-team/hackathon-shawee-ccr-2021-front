import { Request, Response } from 'express';
import createHttpError from 'http-errors';
import { getJWTfromRequest } from '../../../../core/utils/get-jwt-from-request';
import { PersonProfileUpdateService } from './person-profile-update.service';

export class PersonProfileUpdateController {
  constructor(private personProfileUpdateService: PersonProfileUpdateService) {}

  async handle(req: Request, res: Response, next: any): Promise<Response> {
    const { name } = req.body;
    const jwtData = getJWTfromRequest(req);
    try {
      await this.personProfileUpdateService.execute({
        name,
        userId: jwtData.user.id,
      });
    } catch (error) {
      return next(createHttpError(400, error));
    }

    return res.status(201).send();
  }
}
