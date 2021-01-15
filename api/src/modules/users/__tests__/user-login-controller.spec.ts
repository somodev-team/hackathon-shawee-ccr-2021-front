import request from 'supertest'
import { expressTestApp } from '../../../__tests__/utils/get-express-test-app'
import jwt from 'jsonwebtoken'
import { database } from '../../../datasources/knex'
import { JWT_SECRET } from '../../../core/middlewares/authentication.middleware'

const EMAIL = 'fake@user.com'
const PASSWORD = '1234567'

describe('User Create Controller', () => {
  beforeEach(async () => {
    await database('users').truncate()
  })

  afterAll(async () => {
    await database.destroy()
  })

  it('should return valid jwt token on login', async () => {
    await request(expressTestApp).post('/users/create').send({
      email: EMAIL,
      password: PASSWORD,
    })
    const response = await request(expressTestApp).post('/users/login').send({
      email: EMAIL,
      password: PASSWORD,
    })
    const isValidToken = jwt.verify(response.body.token, JWT_SECRET)

    expect(response.status).toBe(200)
    expect(isValidToken).toBeTruthy()
  })
  it('should throw error on wrong password', async () => {
    await request(expressTestApp).post('/users/create').send({
      email: EMAIL,
      password: PASSWORD,
    })
    const response = await request(expressTestApp).post('/users/login').send({
      email: EMAIL,
      password: 'wrong-password',
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('error')
    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('users.login.wrong-credentials')
  })
  it('should throw error on user not found', async () => {
    await request(expressTestApp).post('/users/create').send({
      email: EMAIL,
      password: PASSWORD,
    })
    const response = await request(expressTestApp).post('/users/login').send({
      email: 'wrong@email.com',
      password: PASSWORD,
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('error')
    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('users.login.wrong-credentials')
  })
})
