import { useApi } from './use-api.hook'
import { useGlobalLoggedUser } from 'app-providers'
import JwtDecode from 'jwt-decode'

const LOGGED_USER_KEY = 'bb-logged-user'

export const useAuth = () => {
  const [, setLoggedUser] = useGlobalLoggedUser()
  const api = useApi('users')

  const login = async credentials => {
    const token = await api.post('login', credentials)
    localStorage.setItem(LOGGED_USER_KEY, token)
    setLoggedUser(JwtDecode(token))
  }

  const register = async credentials => {
    const token = await api.post('create', credentials)
    localStorage.setItem(LOGGED_USER_KEY, token)
    setLoggedUser(JwtDecode(token))
  }

  const logout = () => {
    localStorage.removeItem(LOGGED_USER_KEY)
    setLoggedUser(null)
  }

  return {
    login,
    register,
    logout,
  }
}
