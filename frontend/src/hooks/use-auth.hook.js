import { useApi } from './use-api.hook'
import { useGlobalLoggedUser } from 'app-providers'
import { removeToken, safeJWTDecode, saveToken } from 'app-helpers'

export const useAuth = () => {
  const [, setLoggedUser] = useGlobalLoggedUser()
  const api = useApi('users')

  const login = async credentials => {
    const { token } = await api.post('login', credentials)
    saveToken(token)
    setLoggedUser(safeJWTDecode(token))
  }

  const register = async credentials => {
    const { token } = await api.post('create', credentials)
    saveToken(token)
    setLoggedUser(safeJWTDecode(token))
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
