import React from 'react'
import { createRoute } from 'app-route-manager'
import './register.style.scss'
import { useAuth, useRoute } from 'app-hooks'
import { Form, Input, Button, BackButton } from 'app-components'
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
    <div className="login bg page">
      <div className="container">
        <BackButton />
      </div>
      <div className="container full-height">
        <div className="flex-grow-1 d-flex flex-column align-items-center p-5">
          {/* <img src={Pablo} width="120" alt="Bem Vindo" /> */}
          <br />
          <br />
          <br />
          <h1 className="title">Bem vindo ao Dindo</h1>
          <p className="login__paragraph">
            Precisamos de alguns dados seus para finalizar seu cadastro
          </p>
        </div>
        <div className="mb-3">
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
            {/* <div className="input-grouped"> */}
            <Input
              defaultChecked
              label=""
              value="person"
              name="type"
              type="hidden"
            />
            {/* <Input label="Empresa" value="person" name="type" type="radio" /> */}
            {/* </div> */}

            <Button className="btn btn-primary w-100">Registrar</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

createRoute({
  path: '/register',
  component: Register,
})
