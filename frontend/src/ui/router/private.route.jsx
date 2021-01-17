import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { scrollHelper } from 'app-helpers'
import { useRoute } from 'app-hooks'
import { useGlobalLoggedUser, useGlobalNavbar } from 'app-providers'

const Page = ({
  component: Component,
  role,
  permissions,
  hideNavbar,
  ...props
}) => {
  const [, setNavbarVisible] = useGlobalNavbar()
  const [loggedUser] = useGlobalLoggedUser()
  const { goToLogin } = useRoute()

  useEffect(() => {
    scrollHelper.goToTop()

    setNavbarVisible(!hideNavbar)
  }, [Component])

  if (!loggedUser) {
    goToLogin({ from: props.location })

    return null
  }

  return (
    <>
      <Component {...props} />
    </>
  )
}

export const PrivateRoute = ({ component, hideNavbar, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Page component={component} hideNavbar={hideNavbar} {...props} />
      )}
    />
  )
}
