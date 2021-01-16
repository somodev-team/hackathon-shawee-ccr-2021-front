import { history } from 'app-helpers'

export const useRoute = () => {
  const goTo = (path, config) => history.push(path, config)

  const goToLogin = config => goTo('/login', config)
  const goToHome = config => goTo('/home', config)
  const goToRegister = config => goTo('/register', config)

  const goBack = () => history.goBack()

  return {
    goToLogin,
    goToHome,
    goToRegister,
    goTo,
    goBack,
  }
}
