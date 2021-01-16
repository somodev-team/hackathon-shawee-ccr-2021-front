import React from 'react'
import { createRoute } from 'app-route-manager'
import './home.style.scss'

export const Home = () => {
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
