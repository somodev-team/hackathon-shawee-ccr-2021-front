import request from 'supertest'
import { database } from '../../../datasources/knex'
import { expressTestApp } from '../../../__tests__/utils/get-express-test-app'

const EMAIL = 'fake@user.com'
const PASSWORD = '1234567'

describe('User Create Controller', () => {
  beforeEach(async () => {
    await database('users').truncate()
  })

  afterAll(async () => {
    await database.destroy()
  })

  it('should create new user', async () => {
    const response = await request(expressTestApp).post('/users/create').send({
      email: EMAIL,
      password: PASSWORD,
    })
    expect(response.status).toBe(201)
  })

  it('should not create new user with existing email', async () => {
    await request(expressTestApp).post('/users/create').send({
      email: EMAIL,
      password: PASSWORD,
    })

    const response = await request(expressTestApp).post('/users/create').send({
      email: EMAIL,
      password: PASSWORD,
    })
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('error')
    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('users.register.user-already-registered')
  })

  it('should not create new user with invalid email', async () => {
    const response = await request(expressTestApp).post('/users/create').send({
      email: 'not-a-valid-email',
      password: PASSWORD,
    })
    expect(response.status).toBe(400)
  })
})
