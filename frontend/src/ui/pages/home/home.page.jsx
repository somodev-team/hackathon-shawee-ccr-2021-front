import React, { useEffect } from 'react'
import { createRoute } from 'app-route-manager'
import './home.style.scss'
import { useGlobalLoggedUser } from 'app-providers'
import { useRoute } from 'app-hooks'

export const Home = () => {
  const [loggedUser] = useGlobalLoggedUser()
  const { goToUpdateProfile } = useRoute()

  useEffect(() => {
    if (!loggedUser.profileDone) {
      goToUpdateProfile()
    }
  }, [])

  return (
    <div className="home">
      <h1>home</h1>
    </div>
  )
}

createRoute({
  path: '/home',
  component: Home,
  isPrivate: true,
})
