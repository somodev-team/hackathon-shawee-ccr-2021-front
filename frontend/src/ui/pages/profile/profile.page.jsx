import React, { useEffect } from 'react'
import { createRoute } from 'app-route-manager'
import './profile.style.scss'
import { usePerson } from 'app-hooks'

export const Profile = () => {
  const { getProfile } = usePerson()

  useEffect(() => {
    const fetch = async () => {
      const profile = await getProfile()
    }

    fetch()
  }, [])

  return (
    <div className="main d-flex flex-column">
      <div className="flex-grow-1">
        <h1>Perfil</h1>
      </div>
      <button className="btn btn-primary">Botão</button>
    </div>
  )
}

createRoute({
  path: '/profile',
  component: Profile,
  isPrivate: true,
})
