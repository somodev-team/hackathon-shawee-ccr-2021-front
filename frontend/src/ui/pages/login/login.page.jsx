import React from 'react'
import './login.style.scss'
import { createRoute } from 'app-route-manager'
import { Form, Input, Button, BackButton } from 'app-components'
import { useAuth, useRoute } from 'app-hooks'
import Pablo from '../../static/img/pablo.png'
export const Login = () => {
  const { login } = useAuth()
  const { goToHome } = useRoute()

  const handleSubmit = async data => {
    await login(data)
    goToHome()
  }

  return (
    <div className="main d-flex flex-column">
      <BackButton />
      <div className="flex-grow-1 text-center p-3 d-flex flex-column justify-content-center align-items-center">
        <img src={Pablo} width="120" alt="Bem Vindo" />
        <h1 className="title mt-3">Bem vindo ao Dindo</h1>
        <p className="login__paragraph">
          Estamos muito animados em te ver novamente!
        </p>
      </div>
      <div>
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
  )
}

createRoute({
  path: '/login',
  component: Login,
})
