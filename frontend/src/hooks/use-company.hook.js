import { useApi } from './use-api.hook'

export const useCompany = () => {
  const api = useApi('company-profile')

  const getCompanies = async () => {
    const { data } = await api.get('list')

    return data
  }

  const getCompany = async id => {
    return await api.get(id)
  }

  return {
    getCompanies,
    getCompany,
  }
}
