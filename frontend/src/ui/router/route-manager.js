const routes = []

export const createRoute = ({
  path,
  component,
  isPrivate = false,
  exact = true,
  hideNavbar = false,
}) => {
  routes.push({
    path,
    component,
    isPrivate,
    exact,
    hideNavbar,
  })
}

export const getRoutes = () => routes
