import React from 'react'
import { createRoute } from 'app-route-manager'
import './profile.style.scss'

export const Profile = () => {
  return (
    <div className="profile">
      <h1>Perfil</h1>
    </div>
  )
}

createRoute({
  path: '/profile',
  component: Profile,
})
