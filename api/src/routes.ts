import express from 'express';
import passport from 'passport';
import { getAuthenticationMiddleware } from './core/middlewares/authentication.middleware';
import { router as usersRouter } from './modules/users/endpoints';

export function getAppRouter() {
  const router = express.Router();

  // Public routes
  router.use('/users', usersRouter);

  // Private routes
  router.use(getAuthenticationMiddleware());
  router.use(passport.authenticate('jwt', { session: false }));

  return router;
}
