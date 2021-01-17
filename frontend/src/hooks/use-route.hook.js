import { history } from 'app-helpers'

export const useRoute = () => {
  const goTo = (path, config) => history.push(path, config)

  return {
    goTo,
    goBack: () => history.goBack(),

    goToStart: config => goTo('/', config),
    goToLogin: config => goTo('/login', config),
    goToRegister: config => goTo('/register', config),
    goToHome: config => goTo('/home', config),
    goToUpdateProfile: config => goTo('/update-profile', config),
    goToProfile: config => goTo('/profile', config),
    goToCompany: id => goTo(`/company/${id}`),
  }
}
