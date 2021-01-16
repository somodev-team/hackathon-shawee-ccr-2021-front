import { useApi } from './use-api.hook'

export const usePerson = () => {
  const api = useApi('person-profile')

  const updateProfile = async data => {
    const [day, month, year] = data.bornDate.split('/')
    data.bornDate = new Date([month, day, year].join('/')).toISOString()
    data.areasOfInterest = ['cs', 'tibia']

    await api.post('update', data)
  }

  return {
    updateProfile,
  }
}
