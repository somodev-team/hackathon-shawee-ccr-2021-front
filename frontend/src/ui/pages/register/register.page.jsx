import React from 'react'
import { createRoute } from 'app-route-manager'
import './register.style.scss'
import { useAuth, useRoute } from 'app-hooks'
import { Form, Input } from 'app-components'
import { Yup } from 'app-helpers'

const schema = Yup.object().shape({
  username: Yup.string().min(4).max(20).required(),
  password: Yup.string().min(6).max(255).required(),
})

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

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" mask="username" />
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
