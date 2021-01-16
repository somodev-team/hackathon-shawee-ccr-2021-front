import { IsNotEmpty, IsUUID } from 'class-validator';

export interface IPersonProfile {
  userId: string;
  name: string;
}

export class PersonProfile implements IPersonProfile {
  @IsUUID('4')
  userId: string;

  @IsNotEmpty()
  name: string;

  constructor(props: IPersonProfile) {
    this.userId = props.userId;
    this.name = props.name;
  }
}
