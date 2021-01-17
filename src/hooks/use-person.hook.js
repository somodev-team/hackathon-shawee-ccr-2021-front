import { useGlobalLoggedUser } from 'app-providers'
import { useApi } from './use-api.hook'

export const usePerson = () => {
  const [loggedUser] = useGlobalLoggedUser()
  const api = useApi('person-profile')

  const updateProfile = async data => {
    const [day, month, year] = data.bornDate.split('/')
    data.bornDate = new Date([month, day, year].join('/')).toISOString()

    await api.post('update', data)
    localStorage.setItem('completed-profile', true)
  }

  const getProfile = async id => {
    return await api.get(id || loggedUser.id)
  }

  return {
    updateProfile,
    getProfile,
  }
}
