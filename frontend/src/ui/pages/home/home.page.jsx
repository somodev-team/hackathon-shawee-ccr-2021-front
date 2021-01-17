import React, { useEffect } from 'react'
import { createRoute } from 'app-route-manager'
import { CardFind, CardFeed } from 'app-components'
import './home.style.scss'
import { useRoute } from 'app-hooks'

export const Home = () => {
  const { goToUpdateProfile } = useRoute()

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('completed-profile'))) {
      goToUpdateProfile()
    }
  }, [])

  return (
    <div className="page">
      <div className="scroll container">
        <CardFind />
        <h1 className="feed-title">Feed de notícias</h1>
        <CardFeed />
        <CardFeed />
        <CardFeed />
        <CardFeed />
      </div>
    </div>
  )
}

createRoute({
  path: '/home',
  component: Home,
  isPrivate: true,
})
