import React from 'react'
import { createRoute } from 'app-route-manager'
import './start.style.scss'
import { Button } from 'app-components'
import { useRoute } from 'app-hooks'
import Logo from '../../static/img/logo.png'

export const Start = () => {
  const { goToRegister, goToLogin } = useRoute()

  return (
    <div className="main d-flex flex-column">
      <div className="flex-grow-1 text-center p-3 d-flex flex-column justify-content-center align-items-center">
        <img src={Logo} alt="Logo" width="200" />
        <h1 className="title mt-5">Sua oportunidade a alguns passos</h1>
      </div>
      <div className="d-flex flex-column">
        <Button className="btn btn-primary mb-2" onClick={() => goToLogin()}>
          Entrar
        </Button>
        <Button
          className="btn btn-secondary mb-2"
          onClick={() => goToRegister()}
        >
          Cadastre-se
        </Button>
      </div>
    </div>
  )
}

createRoute({
  path: '/',
  component: Start,
})
