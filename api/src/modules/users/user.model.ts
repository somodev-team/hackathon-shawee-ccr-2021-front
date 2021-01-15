import { v4 as uuidv4 } from 'uuid'
import { IsEmail, IsUUID, MinLength } from 'class-validator'

export interface IUser {
  id?: string
  email: string
  password: string
}

export class User implements IUser {
  @IsUUID('4')
  id: string

  @IsEmail()
  email: string

  @MinLength(6)
  password: string

  constructor(props: IUser) {
    this.id = props.id || uuidv4()
    this.email = props.email
    this.password = props.password
  }
}
