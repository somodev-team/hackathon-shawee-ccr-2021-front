import { useApi } from './use-api.hook'

export const usePerson = () => {
  const api = useApi('person-profile')

  const updateProfile = async data => {
    await api.post('update', data)
  }

  return {
    updateProfile,
  }
}
