import React, { useEffect } from 'react'
import { createRoute } from 'app-route-manager'
import { CardFind, CardFeed } from 'app-components'
import './home.style.scss'
import { useRoute } from 'app-hooks'
import OhNo from '../../static/img/ohno.svg'

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
        <CardFind
          img={OhNo}
          title="Oh no!"
          text="Você ainda não tem um padrinho"
          buttonText="Encontre seu dindo"
          buttonAction=""
        />
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
