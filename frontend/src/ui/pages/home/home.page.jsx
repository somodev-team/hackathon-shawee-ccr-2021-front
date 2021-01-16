import React from 'react'
import { createRoute } from 'app-route-manager'
import './home.style.scss'
import { Form } from '@unform/web'
import { Input } from 'app-components'
import { usePerson } from 'app-hooks'

export const Home = () => {
  const { updateProfile } = usePerson()

  const handleSubmit = data => {
    updateProfile(data)
  }

  return (
    <div className="home">
      <h1>home</h1>

      <Form onSubmit={handleSubmit}>
        <Input name="name" />

        <button>Enviar</button>
      </Form>
    </div>
  )
}

createRoute({
  path: '/home',
  component: Home,
  isPrivate: true,
})
