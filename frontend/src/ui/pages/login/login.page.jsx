import React from 'react'
import './login.style.scss'
import { createRoute } from 'app-route-manager'
import { Form } from '@unform/web'
import { Input } from 'app-components'

export const Login = () => {
  const handleSubmit = data => {
    console.log(data)
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
