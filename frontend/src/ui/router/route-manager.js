const routes = []

export const createRoute = ({
  path,
  component,
  isPrivate = false,
  exact = true,
}) => {
  routes.push({
    path,
    component,
    isPrivate,
    exact,
  })
}

export const getRoutes = () => routes
