const LOGGED_USER_KEY = 'sd-logged-user'

export const saveToken = token => localStorage.setItem(LOGGED_USER_KEY, token)
export const getToken = () => localStorage.getItem(LOGGED_USER_KEY)
export const removeToken = () => localStorage.removeItem(LOGGED_USER_KEY)
