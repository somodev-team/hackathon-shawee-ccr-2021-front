import { safeJWTDecode } from 'app-helpers'
import createGlobalState from 'react-create-global-state'

const token = localStorage.getItem('sd-logged-user')
const { user } = safeJWTDecode(token)

export const [useGlobalLoggedUser, LoggedUserProvider] = createGlobalState(user)
