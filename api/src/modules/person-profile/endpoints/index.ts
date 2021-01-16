import express from 'express';
import { personProfileUpdateController } from './update';

const router = express.Router();

router.post(
  '/update',
  personProfileUpdateController.handle.bind(personProfileUpdateController)
);

export { router };
