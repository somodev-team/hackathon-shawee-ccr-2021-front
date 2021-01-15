import { IUser } from '../../user.model'

export interface IUserLoginDTO extends Pick<IUser, 'email' | 'password'> {}
