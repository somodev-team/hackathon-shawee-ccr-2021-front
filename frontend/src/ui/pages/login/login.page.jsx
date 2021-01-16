import React from 'react'
import './login.style.scss'
import { createRoute } from 'app-route-manager'
import { Form, Input } from 'app-components'
import { useAuth, useRoute } from 'app-hooks'

export const Login = () => {
  const { login } = useAuth()
  const { goToHome } = useRoute()

  const handleSubmit = async data => {
    await login(data)
    goToHome()
  }

  return (
    <div className="login">
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" mask="username" />
        <Input label="Senha" name="password" type="password" />

        <button>Entrar</button>
      </Form>
    </div>
  )
}

createRoute({
  path: '/login',
  component: Login,
})
