import jwtDecode from 'jwt-decode'
import { removeToken } from './logged-token.helper'

export const safeJWTDecode = token => {
  try {
    return jwtDecode(token)
  } catch (e) {
    removeToken()
    
    return null
  }
}
