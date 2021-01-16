import React from 'react'
import './login.style.scss'
import { createRoute } from 'app-route-manager'
import { Form } from '@unform/web'
import { Input } from 'app-components'
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
        <Input name="email" type="email" />
        <Input name="password" type="password" />

        <button>Entrar</button>
      </Form>
    </div>
  )
}

createRoute({
  path: '/login',
  component: Login,
})
