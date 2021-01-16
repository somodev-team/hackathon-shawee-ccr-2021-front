import createGlobalState from 'react-create-global-state'

const user = localStorage.getItem('cck-logged-user')

export const [useGlobalLoggedUser, LoggedUserProvider] = createGlobalState(user)
