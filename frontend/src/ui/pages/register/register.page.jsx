import React from 'react'
import { createRoute } from 'app-route-manager'
import './register.style.scss'
import { useAuth, useRoute } from 'app-hooks'
import { Form, Input, Button, BackButton } from 'app-components'
import { Yup } from 'app-helpers'
import Pablo from '../../static/img/pablo.js'

const schema = Yup.object().shape({
  username: Yup.string().min(4).max(20).required(),
  password: Yup.string().min(6).max(255).required(),
})

export const Register = () => {
  const { register } = useAuth()
  const { goToUpdateProfile } = useRoute()

  const handleSubmit = async data => {
    await register(data)
    goToUpdateProfile()
  }

  return (
    <div className="main d-flex flex-column">
      <BackButton />
      <div className="flex-grow-1 text-center p-3 d-flex flex-column justify-content-center align-items-center">
        <img src={Pablo} width="120" alt="Bem Vindo" />
        <h1 className="title mt-3">Bem vindo ao Dindo</h1>
      </div>
      <div>
        <Form schema={schema} onSubmit={handleSubmit}>
          <div className="input-grouped">
            <Input
              label="Usuário"
              name="username"
              mask="username"
              placeholder="seu_usuario"
            />
          </div>
          <div className="input-grouped">
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Sua Senha"
            />
          </div>
          <div className="">Tipo de cadastro</div>
          <div className="d-flex mb-3">
            <div className="radio mr-4">
              <Input
                defaultChecked
                label="Pessoal"
                value="person"
                name="type"
                type="radio"
              />
            </div>
            <div className="radio">
              <Input
                label="Empresarial"
                value="person"
                name="type"
                type="radio"
              />
            </div>
          </div>
          <Button className="btn btn-primary w-100">Registrar</Button>
        </Form>
      </div>
    </div>
  )
}

createRoute({
  path: '/register',
  component: Register,
})
