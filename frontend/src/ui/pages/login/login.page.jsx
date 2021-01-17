import React from 'react'
import './login.style.scss'
import { createRoute } from 'app-route-manager'
import { Form, Input, Button, BackButton } from 'app-components'
import { useAuth, useRoute } from 'app-hooks'
import Pablo from '../../static/img/pablo.js'
export const Login = () => {
  const { login } = useAuth()
  const { goToHome } = useRoute()

  const handleSubmit = async data => {
    await login(data)
    goToHome()
  }

  return (
    <div className="login bg page">
      <div className="container">
        <BackButton />
      </div>
      <div className="container full-height">
        <div className="flex-grow-1 d-flex flex-column align-items-center p-5">
          <img src={Pablo} width="120" alt="Bem Vindo" />
          <br />
          <br />
          <h1 className="title">Bem vindo ao Dindo</h1>
          <p className="login__paragraph">
            Estamos muito animados em te ver novamente!
          </p>
        </div>
        <div className="mb-3">
          <Form onSubmit={handleSubmit}>
            <div className="input-grouped">
              <Input
                label="Usuário"
                name="username"
                mask="username"
                placeholder="@seu_usuario"
              />
            </div>
            <div className="input-grouped">
              <Input
                label="Senha"
                name="password"
                type="password"
                placeholder="Sua Senha"
              />
            </div>
            <Button className="btn btn-primary w-100">Entrar</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

createRoute({
  path: '/login',
  component: Login,
})
