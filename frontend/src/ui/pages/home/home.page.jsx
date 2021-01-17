import React from 'react'
import { createRoute } from 'app-route-manager'
import { Navbar, CardFind, CardFeed } from 'app-components'
import './home.style.scss'

export const Home = () => {
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
      <Navbar />
    </div>
  )
}

createRoute({
  path: '/home',
  component: Home,
  isPrivate: true,
})
