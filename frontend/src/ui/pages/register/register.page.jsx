import React from 'react'
import { createRoute } from 'app-route-manager'
import './register.style.scss'
import { useAuth, useRoute } from 'app-hooks'
import { Form } from '@unform/web'
import { Input } from 'app-components'

export const Register = () => {
  const { register } = useAuth()
  const { goToHome } = useRoute()

  const handleSubmit = async data => {
    await register(data)
    goToHome()
  }

  return (
    <div className="register">
      <h1>Registro</h1>

      <Form onSubmit={handleSubmit}>
        <Input label="E-mail" name="email" type="email" />
        <Input label="Password" name="password" type="password" />

        <Input
          defaultChecked
          label="Pessoa"
          value="person"
          name="type"
          type="radio"
        />
        <Input label="Empresa" value="person" name="type" type="radio" />

        <button>Registrar</button>
      </Form>
    </div>
  )
}

createRoute({
  path: '/register',
  component: Register,
})
