import { IUser } from '../../user.model';

export interface IUserCreateDTO
  extends Pick<IUser, 'email' | 'type' | 'password'> {}
