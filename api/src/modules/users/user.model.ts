import { v4 as uuidv4 } from 'uuid'
import { IsAlphanumeric, IsIn, IsUUID, MinLength } from 'class-validator'

export interface IUser {
  id?: string
  type: string
  username: string
  password: string
}

export class User implements IUser {
  @IsUUID('4')
  id: string

  @IsIn(['person', 'company'])
  type: string

  @IsAlphanumeric()
  @MinLength(4)
  username: string

  @MinLength(6)
  password: string

  constructor(props: IUser) {
    this.id = props.id || uuidv4()
    this.type = props.type
    this.username = props.username
    this.password = props.password
  }
}
