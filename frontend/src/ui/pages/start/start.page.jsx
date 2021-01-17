import React, { useEffect } from 'react'
import { createRoute } from 'app-route-manager'
import './start.style.scss'
import { Button } from 'app-components'
import { useRoute } from 'app-hooks'
import { useGlobalLoggedUser } from 'app-providers'
import Logo from '../../static/img/logo.png'

export const Start = () => {
  const { goToRegister, goToLogin, goToHome } = useRoute()
  const [loggedUser] = useGlobalLoggedUser()

  useEffect(() => {
    if (loggedUser) {
      goToHome()
    }
  }, [])

  return (
    <div className="start bg page">
      <div className="container full-height">
        <div className="flex-grow-1 d-flex justify-content-center flex-column align-items-center">
          <img src={Logo} alt="Logo" width="200" />
          <br />
          <br />
          <br />
          <h1 className="title text-center start-text">
            Sua oportunidade a alguns passos
          </h1>
        </div>
        <div className="mb-3">
          <Button className="btn btn-primary" onClick={() => goToLogin()}>
            Entrar
          </Button>
          <Button className="btn btn-secondary" onClick={() => goToRegister()}>
            Cadastre-se
          </Button>
        </div>
      </div>
    </div>
  )
}

createRoute({
  path: '/',
  component: Start,
})
