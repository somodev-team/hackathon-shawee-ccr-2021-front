import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { scrollHelper } from 'app-helpers'
import { useGlobalLoggedUser } from 'app-providers'
import { useRoute } from 'app-hooks'

export const PublicRoute = ({ component: Component, ...rest }) => {
  const [loggedUser] = useGlobalLoggedUser()
  const { goToHome } = useRoute()

  useEffect(() => {
    if (loggedUser) {
      goToHome()
    }
  }, [])

  useEffect(() => {
    scrollHelper.goToTop()
  }, [Component])

  return <Route {...rest} render={props => <Component {...props} />} />
}
