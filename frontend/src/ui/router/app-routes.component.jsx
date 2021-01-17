import React from 'react'
import { history } from 'app-helpers'
import { Router, Switch } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from 'app-router'
import { getRoutes } from './route-manager'
import { Navbar } from 'app-components'

// We need to import this to create the routes
// For more informations, see: https://gist.github.com/pedrohenriquepires/fce3a629b9ddd379a0f758c08634a7db
import 'app-pages'
import { useGlobalNavbar } from 'app-providers'

export const AppRoutes = () => {
  const [navbarVisible] = useGlobalNavbar()

  const mapRoutes = () => {
    return getRoutes().map(({ isPrivate, component, ...route }, key) => {
      const RouteType = isPrivate ? PrivateRoute : PublicRoute

      return <RouteType key={key} component={component} {...route} />
    })
  }

  return (
    <>
      <Router history={history}>
        <Switch>{mapRoutes()}</Switch>

        {navbarVisible && <Navbar />}
      </Router>
    </>
  )
}
