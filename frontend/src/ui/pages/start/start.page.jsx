import React, { useEffect } from 'react'
import { createRoute } from 'app-route-manager'
import './start.style.scss'
import { useRoute } from 'app-hooks'
import { useGlobalLoggedUser } from 'app-providers'

export const Start = () => {
  const { goToRegister, goToLogin, goToHome } = useRoute()
  const [loggedUser] = useGlobalLoggedUser()

  useEffect(() => {
    if (loggedUser) {
      goToHome()
    }
  }, [])

  return (
    <div className="start">
      <button onClick={() => goToRegister()}>Criar conta</button>
      <button onClick={() => goToLogin()}>Já tenho uma conta</button>
    </div>
  )
}

createRoute({
  path: '/',
  component: Start,
})
