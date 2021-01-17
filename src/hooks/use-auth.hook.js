import { useApi } from './use-api.hook'
import { useGlobalLoggedUser } from 'app-providers'
import { removeToken, safeJWTDecode, saveToken } from 'app-helpers'

export const useAuth = () => {
  const [, setLoggedUser] = useGlobalLoggedUser()
  const api = useApi('users')

  const login = async credentials => {
    const { token } = await api.post('login', credentials)
    const { user } = safeJWTDecode(token)

    saveToken(token)
    setLoggedUser(user)

    localStorage.setItem('completed-profile', user.profileDone)
  }

  const register = async credentials => {
    credentials.type = 'person'

    const { token } = await api.post('create', credentials)
    const { user } = safeJWTDecode(token)

    saveToken(token)
    setLoggedUser(user)

    localStorage.setItem('completed-profile', user.profileDone)
  }

  const logout = () => {
    removeToken()
    setLoggedUser(null)
  }

  return {
    login,
    register,
    logout,
  }
}
