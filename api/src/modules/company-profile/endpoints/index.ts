import express from 'express'
import { companyProfileGetController } from './get'
import { companyProfileUpdateController } from './update'

const router = express.Router()

router.post(
  '/update',
  companyProfileUpdateController.handle.bind(companyProfileUpdateController)
)

router.get(
  '/:userId',
  companyProfileGetController.handle.bind(companyProfileGetController)
)

export { router }
