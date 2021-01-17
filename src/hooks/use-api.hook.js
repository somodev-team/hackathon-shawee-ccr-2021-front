import axios from 'axios'
import { CONFIGS } from 'app-constants'
import { getToken } from 'app-helpers'
import { useGlobalLoader } from 'app-providers'

const instance = axios.create({
  baseURL: CONFIGS.API_URL,
})

export const useApi = path => {
  const [loaderVisible, setLoaderVisible] = useGlobalLoader()

  const callApi = async ({ url, data, ...config }) => {
    setLoaderVisible(true)

    config.url = buildUrl(url)
    config.data = buildData(data)

    const token = getToken()

    if (token) {
      config.headers = {
        Authorization: `Bearer ${getToken()}`,
      }
    }

    try {
      const result = await instance.request(config)
      return result.data
    } finally {
      setLoaderVisible(false)
    }
  }

  const buildData = data => data || null
  const buildUrl = url => (url ? `${path}/${url}` : path)

  return {
    get: (url, config = {}) => callApi({ method: 'GET', url, ...config }),
    post: (url, data, config = {}) =>
      callApi({ method: 'POST', url, data, ...config }),
    put: (url, data, config = {}) =>
      callApi({ method: 'PUT', url, data, ...config }),
    del: (url, config = {}) => callApi({ method: 'DELETE', url, ...config }),
  }
}
